import $ from "jquery";
import React, { useEffect, useState } from "react";
import { UserInfo, ProblemInfo } from "../data/interfaces/types";
import { getUser } from "../data/LuoguAPI";
import { InfoCard, FailedCard, LoadingCard } from ".";

const getInfo = (id: number, callback: (prop: [UserInfo, ProblemInfo[]] ) => void) => {
  $.ajax({
    async: true,
    type: "GET",
    url: getUser(id),
    headers: {
      "x-luogu-type": "content-only"
    },
    success: (res) => {
      callback([res.currentData.user, res.currentData.passedProblems]);
    },
    error: () => {
      callback([undefined, undefined]);
    }
  });
};

export const Card = (props: { id: number }) => {
  const uid = props.id;
  const [loaded, setLoadType] = useState(false);
  const [data, setData] = useState<[UserInfo, ProblemInfo[]]>(undefined);

  if (uid < 0) {
    console.error("Get user uid failed!");
    return <FailedCard />;
  }
  useEffect(() => {
    getInfo(uid, (userInfo) => {
      if (userInfo === undefined) 
        console.error(`Get user ${uid}'s info failed!`);
      setData(userInfo);
      setLoadType(true);
    });
  }, []);
  return loaded ? (data !== undefined ? <InfoCard {...data}  /> : <FailedCard />) : <LoadingCard />;
};
