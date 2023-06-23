import React from "react";

const TDElement = ({ value }) => {
  return (
    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
      <span className={`text-gray-600 hover:text-black`} href="#">
        {value}
      </span>
    </td>
  );
};

function TableRow() {
  return (
    <tr className="bg-gray-50 hover:bg-gray-100">
      <TDElement value={1} />
      <TDElement value={"Jone Doe"} />
      <TDElement value={"Batsman"} />
      <TDElement value={"1212121"} />
      <TDElement value={"18"} />
    </tr>
  );
}

export default TableRow;
