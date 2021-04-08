import React, { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import AddButton from "./add/add-button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import Program from "../interfaces/program";
import EditProgramDay from "./edit/edit-program-day";
import EditLabel from "./edit/edit-label";

import ProgramContext from "../context/program";
import DayBeingEdited from "../context/day";
import firebaseApp from "../firebase";

const EditProgram: React.FC = () => {
  const [active, setActive] = useState(-1);

  const history = useHistory();

  const { program, days, setProgram } = useContext(ProgramContext);

  const { setDay } = useContext(DayBeingEdited);

  function openList(e: React.MouseEvent, index: any) {
    console.log("openList ran");
    index === active ? setActive(-1) : setActive(index);
  }

  useEffect(() => {}, [program]);

  return (
    <section className="Program">
      <h2> Edit or add days to your workout:</h2>
      <ul className={"fa-ul add"}>
        {days &&
          days.map(([name, data], index: number) => {
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
                      days.splice(index, 1);
                      const obj: Program = Object.fromEntries(days);
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
