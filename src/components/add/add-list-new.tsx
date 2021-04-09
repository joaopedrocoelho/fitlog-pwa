import React, { useContext, useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

import useLongPress from "../hooks/useLongPress";
import { useQueryParams, StringParam } from "use-query-params";

import MuscleContext from "../../context/muscle";

import DayBeingEdited from "../../context/day";
import SectionContext from "../../context/section";
import LoadingCode from "../loading-code";
import UsersLists from "../../context/userlists";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseApp from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  header: string;
  callback?: (p: string | string[]) => void;
}

const AddList: React.FC<Props> = ({ header, callback }) => {
  const { dayEdit, setDay } = useContext(DayBeingEdited);
  const { muscle, setMuscle } = useContext(MuscleContext);
  const { section, setSection } = useContext(SectionContext);
  const { muscleList, sectionList, exercisesList, setUsersList } = useContext(
    UsersLists
  );

  //longpress states
  const [MultiSelect, setMultiSelect] = useState(false);
  const [MultiSelectArray, setMultiSelectArray] = useState<string[]>([]);

  const [listKeys, setListKeys] = useState(Object.keys(exercisesList || {})); //render the exercises list
  const [list, setList] = useState<string[]>(); //render the list of items

  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useQueryParams({
    day: StringParam,
    group: StringParam,
    sectionQ: StringParam,
  });

  /* render list */
  const renderExerciseList = useCallback(() => {
    const muscleName = listKeys.find((element) => element === muscle);
    if (muscleName) {
      setList(exercisesList![muscle]);
    }
  }, [exercisesList, listKeys, muscle]);

  const renderList = useCallback(() => {
    switch (header) {
      case "Muscle":
        setList(muscleList);
        break;
      case "Section":
        setList(sectionList);
        break;
      case "Exercise":
        exercisesList && setList(exercisesList[muscle]);
        exercisesList && setListKeys(Object.keys(exercisesList));
        renderExerciseList();
        break;
    }
  }, [
    exercisesList,
    header,
    muscle,
    muscleList,
    renderExerciseList,
    sectionList,
  ]);
  /* onClick and LongPress setup */

  const onLongPress = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (header === "Exercise") {
      setMultiSelect(true);
      setMultiSelectArray((oldArray) => [
        ...oldArray,
        (e.target as Element).innerHTML,
      ]);
    } else {
      onClick(e);
    }
  };

  const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (MultiSelect) {
      if (MultiSelectArray.includes((e.target as Element).innerHTML)) {
        //if element is already selected, deselects it
        const newArray = MultiSelectArray.filter(
          (element) => element !== (e.target as Element).innerHTML
        );
        setMultiSelectArray(newArray);
      } else {
        setMultiSelectArray((oldArray) => [
          ...oldArray,
          (e.target as Element).innerHTML,
        ]);
      }
    } else {
      callback && callback((e.target as Element).innerHTML);
    }
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  const { day, group, sectionQ } = query;
  useEffect(() => {
    if (section === "" || muscle === "" || dayEdit === "") {
      setLoading(true);
      if (day || group || sectionQ) {
        day && setDay(day);
        group && setMuscle(group);
        sectionQ && setSection(sectionQ);
        setLoading(false);
        renderList();
      } else {
        history.push("/");
      }
    }
  }, []);

  const history = useHistory();

  useEffect(() => {
    renderList();
  }, [renderList]);

  return !loading && list ? (
    <>
      <h2>{header}</h2>
      {header === "Exercise" && (
        <h4>press and hold to select multiple exercises</h4>
      )}

      <ul className={"add-list"}>
        {list &&
          list.map((listItem, index) => {
            return (
              <li
                {...longPressEvent}
                key={`${index}-${listItem}`}
                id={`${index}-${listItem}`}
                className={
                  MultiSelectArray.includes(listItem) ? "selected-exercise" : ""
                }
              >
                {listItem}
              </li>
            );
          })}
      </ul>
      {MultiSelect && (
        <div className="multiselect-buttons">
          <span
            className={"fa-layers fa-fw visible"}
            onClick={(e) => {
              setMultiSelectArray([]);
              setMultiSelect(false);
            }}
          >
            <FontAwesomeIcon
              icon={faCircle}
              color={"var(--light-red)"}
              size={"4x"}
            />
            <FontAwesomeIcon icon={faTimes} color="white" size={"3x"} />
          </span>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={"check-edit visible"}
            onClick={(e) => {
              callback && callback(MultiSelectArray);
            }}
            size={"4x"}
          />
        </div>
      )}
    </>
  ) : (
    <LoadingCode />
  );
};

export default AddList;
