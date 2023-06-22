import React from "react";
import { BiSolidHome } from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg'

const Header = () => {
  return (
    <div className="bg-gray-100 flex  justify-between border-2 border-b-gray-200 px-5 py-3">
      <h1 className="text-2xl font-bold text-black ">Nirmata InfoCricket</h1>
      <div className="flex justify-evenly text-md font-semibold text-gray-700">
        <h1 className="ml-4 flex justify-center items-center text-2xl"><BiSolidHome/></h1>
        <h1 className="ml-4 flex justify-center items-center">Live Score</h1>
        <h1 className="ml-4 flex justify-center items-center">News</h1>
        <h1 className="ml-4 flex justify-center items-center">Upcomming</h1>
        <h1 className="ml-4 flex justify-center items-center text-2xl"><CgProfile/></h1>
      </div>
    </div>
  );
};

export default Header;
