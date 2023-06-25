import React, { useState } from "react";
import { LiaSortSolid } from "react-icons/lia";

const TableHeader = ({ filteredPlayersList, setFilteredPlayersList }) => {
  const [nameOrder, setNameOrder] = useState("asc");
  const [rankOrder, setRankOrder] = useState("asc");
  const [ageOrder, setAgeOrder] = useState("asc");
  const [pointsOrder, setPointsOrder] = useState("asc");

  const sortPlayers = (players, sortBy, sortOrder, setSortOrder) => {
    const compareFunction = (a, b) => {
      const playerA = a[sortBy];
      const playerB = b[sortBy];

      if (playerA < playerB) {
        return -1;
      }
      if (playerA > playerB) {
        return 1;
      }
      return 0;
    };

    const sortedPlayers = [...players]?.sort(compareFunction);
    const sortedList =
      sortOrder === "asc" ? sortedPlayers : sortedPlayers.reverse();
    setFilteredPlayersList(sortedList);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <thead className="bg-gray-600 text-white">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-bold uppercase ">
          <div className="flex items-center justify-start">
            <span>Rank</span>
            <LiaSortSolid
              className="ml-3"
              onClick={() => {
                sortPlayers(filteredPlayersList, "rank", rankOrder, setRankOrder);
              }}
            />
          </div>
        </th>
        <th className="px-6 py-3 text-left text-xs font-bold uppercase ">
          <div className="flex items-center justify-start">
            <span>Name</span>
            <LiaSortSolid
              className="ml-3"
              onClick={() => {
                sortPlayers(
                  filteredPlayersList,
                  "name",
                  nameOrder,
                  setNameOrder
                );
              }}
            />
          </div>
        </th>
        <th className="px-6 py-3 text-left text-xs font-bold uppercase ">
          <div className="flex items-center justify-start">
            <span>Type</span>
          </div>
        </th>
        <th className="px-6 py-3 text-left text-xs font-bold uppercase ">
          <div className="flex items-center justify-start">
            <span>Points</span>
            <LiaSortSolid
              className="ml-3"
              onClick={() => {
                sortPlayers(filteredPlayersList, "points", pointsOrder, setPointsOrder);
              }}
            />
          </div>
        </th>
        <th className="px-6 py-3 text-left text-xs font-bold uppercase ">
          <div className="flex items-center justify-start">
            <span>Age</span>
            <LiaSortSolid
              className="ml-3"
              onClick={() => {
                sortPlayers(filteredPlayersList, "dob", ageOrder, setAgeOrder);
              }}
            />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
