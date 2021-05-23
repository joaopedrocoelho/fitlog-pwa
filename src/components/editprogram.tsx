import React, { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import AddButton from "./add/add-button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import Program, { muscleGroup } from "../interfaces/program";
import EditProgramDay from "./edit/edit-program-day";
import EditLabel from "./edit/edit-label";

import ProgramContext from "../context/program";
import DayBeingEdited from "../context/day";
import firebaseApp from "../firebase";

const EditProgram: React.FC = () => {
  const [active, setActive] = useState(-1);

  const history = useHistory();

  const { program, days, setProgram } = useContext(ProgramContext);

  const [DayList, setDayList] = useState<[string, muscleGroup][]>();

  const { setDay } = useContext(DayBeingEdited);

  function openList(e: React.MouseEvent, index: any) {
    index === active ? setActive(-1) : setActive(index);
  }

  useEffect(() => {
    setDayList(days);
    console.log("days", days);
    console.log("DayList", DayList);
  }, [program]);

  return (
    <section className="Program">
      <h2> Edit or add days to your workout:</h2>
      <ul className={"fa-ul add"}>
        {days &&
          DayList &&
          DayList.map(([name, data], index: number) => {
            return (
              <>
                <li key={`day-${index}`} onClick={(e) => openList(e, index)}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    listItem
                    className={index === active ? "rotate" : "li-arrow"}
                  />
                  <EditLabel
                    labelText={name}
                    editElement={(changedName) => {
                      if (name !== changedName) {
                        days[index][0] = changedName;
                        const obj: Program = Object.fromEntries(days);
                        firebaseApp.updateProgram(obj);
                        setProgram(obj);
                      }
                    }}
                    deleteElement={() => {
                      const DaysClone = days;
                      DaysClone.splice(index, 1);
                      const obj: Program = Object.fromEntries(DaysClone);
                      firebaseApp.updateProgram(obj);
                      setProgram(obj);
                    }}
                  />
                </li>
                <div className={index === active ? "show-schedule" : "hide"}>
                  <AddButton
                    caption={"muscle group"}
                    callback={() => {
                      setDay(name);

                      history.push({
                        pathname: `/add-muscle-group`,
                        search: `?day=${name}`,
                      });
                    }}
                  />
                  <EditProgramDay data={data} dayId={index} dayName={name} />
                </div>
              </>
            );
          })}
      </ul>

      <AddButton
        caption={"day"}
        styleClass={"add-day-btn"}
        callback={() => {
          history.push({
            pathname: `/add-new-day`,
          });
        }}
      />
    </section>
  );
};

export default EditProgram;
