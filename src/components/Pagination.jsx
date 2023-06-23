import React from "react";

const PaginationButton = ({ type }) => {
  return (
    <button className=" rounded-md py-1 text-sm ">
      <span className="flex items-center space-x-2 rounded-md border-2 border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50 active:border-gray-500">
        <span>{type}</span>
      </span>
    </button>
  );
};

const Pagination = () => {
  return (
    <div className="mt-1 flex items-center justify-end space-x-2">
      <PaginationButton type={"Previous"} />
      <span className=" flex h-6 w-6 items-center justify-center rounded-full border-2">1</span>
      <PaginationButton type={"Next"} />
    </div>
  );
};

export default Pagination;
