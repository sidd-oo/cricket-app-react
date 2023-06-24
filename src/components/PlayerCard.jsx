import React from "react";
import { getDOB, calculateAge } from "../utils/common";

const PlayerCard = ({ currentPlayer }) => {
  return (
    <div className="h-full w-[590px] rounded-lg shadow-sm">
      <div className=" mx-auto bg-gray-100 ">
        <div className="flex rounded-lg border border-gray-200 bg-white shadow-2xl md:max-w-4xl md:flex-row">
          <div className="w-1/8 h bg-indigo-800 p-4"></div>
          <div className="w-7/8 p-4">
            <div className="flex h-full flex-col justify-between">
              <div className="text-4xl font-extrabold uppercase text-indigo-800">
                {currentPlayer?.name}
              </div>
              <div className="flex items-center justify-start">
                <span className="mr-4 text-sm font-bold text-gray-500">
                  Rank: {currentPlayer?.rank}
                </span>
                <span className="mr-4 text-sm font-bold text-gray-500">
                  Points: {currentPlayer?.points}
                </span>
                <span className="mr-4 text-sm font-bold text-gray-500">
                  Age: {calculateAge(currentPlayer?.dob)}
                </span>
                <span className="mr-4 text-sm font-bold text-gray-500">
                  DOB: {getDOB(currentPlayer?.dob)}
                </span>
              </div>
              <p className="my-2 text-justify text-sm font-semibold text-indigo-600">
                {currentPlayer?.description.slice(0, 300)}...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
