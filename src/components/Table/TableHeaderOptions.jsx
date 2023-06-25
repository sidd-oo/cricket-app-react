import React, { useState } from "react";
import FilterDropDown from "../FilterDropDown";

const TableHeaderOptions = ({
  playersList,
  setFilteredPlayersList,
  searchValue,
  setSearchValue,
  setCurrentFilterType,
}) => {
  const [isFilterDropDownOpen, setIsFilterDropDownOpen] = useState(false);
  return (
    <div className="flex items-center justify-between px-2 pt-3">
      <div className="relative ">
        <input
          type="text"
          className="w-full rounded-md border-2 border-gray-200 p-3 py-1 pl-10 text-sm outline-none hover:border-gray-400 active:border-gray-500"
          placeholder="Search Player..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="h-3.5 w-3.5 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>

      <div className="relative flex items-center space-x-2">
        <button
          id="dropdown-button"
          className=" rounded-md py-1 text-sm shadow-sm "
          onClick={() => {
            setIsFilterDropDownOpen(!isFilterDropDownOpen);
          }}
        >
          <span className="flex items-center space-x-2 rounded-md border-2 border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50 focus:outline-none active:border-gray-500">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div>
            <span>Filters</span>
          </span>
        </button>
        {isFilterDropDownOpen && (
          <div className="absolute right-0 top-8">
            <FilterDropDown
              playersList={playersList}
              setFilteredPlayersList={setFilteredPlayersList}
              setIsFilterDropDownOpen={setIsFilterDropDownOpen}
              setCurrentFilterType={setCurrentFilterType}
              setSearchValue={setSearchValue}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TableHeaderOptions;
