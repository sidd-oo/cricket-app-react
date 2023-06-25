import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between  border-2 border-b-gray-200 bg-gray-100 px-5 py-3">
      <h1 className="text-2xl font-bold text-black ">Nirmata InfoCricket</h1>
      <div className="text-md flex justify-evenly font-semibold text-gray-700">
        <h1 className="ml-4 flex items-center justify-center text-2xl">
          <Link to="/">
            <BiSolidHome />
          </Link>
        </h1>
        <h1 className="ml-4 flex items-center justify-center">Live Score</h1>
        <h1 className="ml-4 flex items-center justify-center">News</h1>
        <h1 className="ml-4 flex items-center justify-center">Upcomming</h1>
        <h1 className="ml-4 flex items-center justify-center text-2xl">
          <CgProfile />
        </h1>
      </div>
    </div>
  );
};

export default Header;
