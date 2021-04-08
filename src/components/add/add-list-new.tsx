import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQueryParams, StringParam } from "use-query-params";

import MuscleContext from "../../context/muscle";

import DayBeingEdited from "../../context/day";
import SectionContext from "../../context/section";
import LoadingCode from "../loading-code";
import UsersLists from "../../context/userlists";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseApp from "../../firebase";

interface Props {
  header: string;
  callback?: (p: string) => void;
}

const AddList: React.FC<Props> = ({ header, callback }) => {
  const [user, loadingUser, error] = useAuthState(firebaseApp.auth);
  const { dayEdit, setDay } = useContext(DayBeingEdited);
  const { muscle, setMuscle } = useContext(MuscleContext);
  const { section, setSection } = useContext(SectionContext);
  const { muscleList, sectionList, exercisesList, setUsersList } = useContext(
    UsersLists
  );

  const [listKeys, setListKeys] = useState(Object.keys(exercisesList || {})); //render the exercises list
  const [list, setList] = useState<string[]>(); //render the list of items

  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useQueryParams({
    day: StringParam,
    group: StringParam,
    sectionQ: StringParam,
  });

  const { day, group, sectionQ } = query;
  useEffect(() => {
    if (section === "" || muscle === "" || dayEdit === "") {
      setLoading(true);
      if (day || group || sectionQ) {
        day && setDay(day);
        group && setMuscle(group);
        sectionQ && setSection(sectionQ);
        setLoading(false);
        console.log("state", list, listKeys);
      } else {
        history.push("/");
      }
    }
  }, []);

  const history = useHistory();

  const renderList = () => {
    const muscleName = listKeys.find((element) => element === muscle);
    if (muscleName) {
      setList(exercisesList![muscle]);
    }
  };

  useEffect(() => {
    exercisesList && setList(exercisesList[muscle]);
    exercisesList && setListKeys(Object.keys(exercisesList));
    switch (header) {
      case "Muscle":
        setList(muscleList);
        break;
      case "Section":
        setList(sectionList);
        break;
      case "Exercise":
        renderList();
        break;
    }
  });

  return !loading && list ? (
    <>
      <h2>{header}</h2>

      <ul className={"add-list"}>
        {list &&
          list.map((muscle, index) => {
            return (
              <li
                onClick={(e) => {
                  callback && callback((e.target as Element).innerHTML);
                }}
                key={`${index}-${muscle}`}
              >
                {muscle}
              </li>
            );
          })}
      </ul>
    </>
  ) : (
    <LoadingCode />
  );
};

export default AddList;
