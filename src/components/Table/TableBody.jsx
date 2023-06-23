import React from "react";
import TableRow from "./TableRow";
import { paginationPerPageSize } from "../../constants/constants";

const TableBody = ({ playersList, pageNo }) => {
  return (
    <tbody className="w-full divide-y-4 divide-white ">
      {playersList
        ?.slice(
          pageNo * paginationPerPageSize - paginationPerPageSize,
          pageNo * paginationPerPageSize
        )
        ?.map((player) => {
          return <TableRow key={player._id} player={player} />;
        })}
    </tbody>
  );
};

export default TableBody;
