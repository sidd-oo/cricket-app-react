import React, { useRef, useEffect } from "react";

const FilterDropDown = ({ isFilterDropDownOpen, setIsFilterDropDownOpen }) => {
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setIsFilterDropDownOpen(false);
  };

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target) &&
//         !event.target.matches("#dropdown-button")
//       ) {
//         closeDropdown();
//       }
//     };
//     document.addEventListener("click", handleOutsideClick);
//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, []);

useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div
      className="mt-2 flex h-fit w-fit flex-col items-center justify-center rounded border border-gray-300 bg-white px-3 py-4 shadow-lg hover:bg-gray-100 "
      ref={dropdownRef}
    >
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
