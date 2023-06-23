import React from "react";
import TableRow from "./TableRow";

const TableBody = ({playersList}) => {
  return (
    <tbody className="divide-y-4 divide-white">
      {
        playersList.map((player)=>{
          return <TableRow key={player._id} player={player}/>
        })
      }
    </tbody>
  );
};

export default TableBody;
