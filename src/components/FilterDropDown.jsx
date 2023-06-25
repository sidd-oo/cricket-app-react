import React, { useEffect } from "react";

const FilterDropDown = ({
  setIsFilterDropDownOpen,
  playersList,
  setFilteredPlayersList,
  setCurrentFilterType,
  setSearchValue,
  dropdownRef
}) => {
 

  const closeDropdown = () => {
    setIsFilterDropDownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {

        closeDropdown();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeDropdown();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleFilter = (type) => {
    setSearchValue("");
    setCurrentFilterType(type[0].toUpperCase() + type.slice(1));
    setFilteredPlayersList(
      playersList.filter((player) => {
        return player.type === type;
      })
    );
  };

  return (
    <div
      className="mt-2 flex h-fit w-fit flex-col items-center justify-center rounded border border-gray-300 bg-white px-3 py-4 shadow-lg hover:bg-gray-100 "
    >
      <button className="mb-1 rounded-full bg-blue-400 px-7 py-0.5">
        Batsman
      </button>
      <button
        className="mb-1 rounded-full bg-red-300 px-9 py-0.5"
        onClick={() => handleFilter("bowler")}
      >
        Bowler
      </button>
      <button
        className="mb-1 rounded-full bg-green-300 px-2.5 py-0.5"
        onClick={() => handleFilter("wicketKeeper")}
      >
        WicketKeeper
      </button>
      <button
        className="mb-1 rounded-full bg-orange-300 px-5 py-0.5"
        onClick={() => handleFilter("allRounder")}
      >
        AllRounder
      </button>
    </div>
  );
};

export default FilterDropDown;
