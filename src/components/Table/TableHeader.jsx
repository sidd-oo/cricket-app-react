import React from "react";

const THElement = ({ heading }) => {
  return (
    <th className="px-6 py-3 text-left text-xs font-bold uppercase ">
      {heading}
    </th>
  );
};

const TableHeader = () => {
  return (
    <thead className="bg-gray-600 text-white">
      <tr>
        <THElement heading={"Rank"} />
        <THElement heading={"Name"} />
        <THElement heading={"Type"} />
        <THElement heading={"Points"} />
        <THElement heading={"Age"} />
      </tr>
    </thead>
  );
};

export default TableHeader;
