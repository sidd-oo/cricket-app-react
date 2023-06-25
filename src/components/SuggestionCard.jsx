import React from "react";
import { getDOB, calculateAge } from "../utils/common";

const SuggestionCard = ({ currentPlayer }) => {

  return (
    <div className="w-[530px] h-[300px] rounded-lg shadow-md m-5">
        <div className="w-full h-full flex rounded-lg border border-gray-200 bg-white shadow-2xl ">
          <div className="w-1/8 bg-gray-700 p-4"></div>
          <div className="w-7/8 p-4 bg-gray-50 hover:bg-gray-100">
            <div className="flex h-full flex-col justify-space overflow-y-hidden">
              <div className="text-4xl font-extrabold uppercase text-gray-600 mb-10 text-right">
                {currentPlayer?.name}
              </div>
              <div className="flex items-center justify-start">
                <span className="mr-4 text-sm font-bold text-gray-500">
                  Rank: {currentPlayer?.rank}
                </span>
                <span className="mr-4 text-sm font-bold text-gray-500">
                  Type: {currentPlayer?.type[0].toUpperCase()+currentPlayer?.type.slice(1)}
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
              <p className="my-2 text-justify text-sm font-semibold text-gray-900">
                {currentPlayer?.description}
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SuggestionCard;
