import React from "react";
import { calculateAge } from "../../utils/common";

const TDElement = ({ value }) => {
  return (
    <td className="mx-auto whitespace-nowrap px-6 py-4 text-sm font-medium">
      <span className={`text-gray-600 hover:text-black`} href="#">
        {value}
      </span>
    </td>
  );
};

function TableRow({ player }) {
  const { dob, name, points, rank, type } = player;

  const getCricketerType = (type) => {
    if (type === "allRounder") return "All Rounder";
    if (type === "batsman") return "Batsman";
    if (type === "wicketKeeper") return "Wicket Keeper";
    if (type === "bowler") return "Bowler";
  };
  return (
    <tr className="bg-gray-50 hover:bg-gray-100">
      <TDElement value={rank} />
      <TDElement value={name} />
      <TDElement value={type ? getCricketerType(type) : "--"} />
      <TDElement value={points} />
      <TDElement value={calculateAge(dob)} />
    </tr>
  );
}

export default TableRow;
