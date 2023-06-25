import React from "react";
import { paginationPerPageSize } from "../constants/constants";
import { IoMdCloseCircleOutline } from "react-icons/io";

const PaginationButton = ({ type, selectPageHandler, pageNo }) => {
  return (
    <button
      className="rounded-md py-1 text-sm"
      onClick={() =>
        selectPageHandler(type === "Next" ? pageNo + 1 : pageNo - 1)
      }
    >
      <span className="flex items-center space-x-2 rounded-md border-2 border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50 active:border-gray-500">
        <span>{type}</span>
      </span>
    </button>
  );
};

const Pagination = ({
  pageNo,
  setPageNo,
  playersList,
  filteredPlayersList,
  setFilteredPlayersList, 
  currentFilterType,
  setCurrentFilterType,
}) => {
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <=
        Math.ceil(filteredPlayersList?.length / paginationPerPageSize) &&
      selectedPage !== pageNo
    ) {
      setPageNo(selectedPage);
    }
  };

  return (
    <div className="mt-1 flex items-center justify-between ">
      <button
        className={`${
          currentFilterType === null ? "invisible" : ""
        } mb-1 flex items-center justify-center rounded-full bg-red-300 px-3 py-0.5`}
      >
        {currentFilterType}
        <IoMdCloseCircleOutline
          className="ml-1"
          onClick={() => {
            setCurrentFilterType(null);
            setFilteredPlayersList(playersList);
          }}
        />
      </button>
      <div className="flex items-center justify-end space-x-2">
        <PaginationButton
          type={"Previous"}
          selectPageHandler={selectPageHandler}
          pageNo={pageNo}
        />
        {[
          ...Array(
            Math.ceil(filteredPlayersList?.length / paginationPerPageSize)
          ),
        ].map((_, i) => {
          return (
            <span
              key={i}
              className={
                pageNo === i + 1
                  ? "flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-gray-300 font-bold text-black"
                  : ""
              }
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          );
        })}
        <PaginationButton
          type={"Next"}
          selectPageHandler={selectPageHandler}
          pageNo={pageNo}
        />
      </div>
    </div>
  );
};

export default Pagination;
