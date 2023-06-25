import React from "react";

const FilterDropDown = () => {
  return (
    <div className="mt-2 flex h-fit w-fit flex-col items-center justify-center rounded border border-gray-300 bg-white hover:bg-gray-100 px-3 py-4 shadow-lg ">
      <button className="mb-1 rounded-full bg-blue-400 px-7 py-0.5">
        Batsman
      </button>
      <button className="mb-1 rounded-full bg-red-300 px-9 py-0.5">
        Bowler
      </button>
      <button className="mb-1 rounded-full bg-green-300 px-2.5 py-0.5">
        WicketKeeper
      </button>
      <button className="mb-1 rounded-full bg-orange-300 px-5 py-0.5">
        AllRounder
      </button>
    </div>
  );
};

export default FilterDropDown;
