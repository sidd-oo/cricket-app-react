import React from "react";
import TableRow from "./TableRow";

const TableBody = ({playersList, pageNo}) => {
  return (
    <tbody className="divide-y-4 divide-white">
      {
        playersList?.slice(pageNo*10 - 10, pageNo*10)?.map((player)=>{
          return <TableRow key={player._id} player={player}/>
        })
      }
    </tbody>
  );
};

export default TableBody;
