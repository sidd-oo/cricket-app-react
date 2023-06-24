import React from "react";

const PlayerCard = ({currentPlayer}) => {

  return (
    <div className="mt-10 h-[200px] w-[380px] rounded-lg border-2 border-gray-400">
      <div>
        <span>{currentPlayer?.rank}</span>
        <span>{currentPlayer?.name}</span>
        <span>{currentPlayer?.description}</span>
        <span>{currentPlayer?.type}</span>
        <span>{currentPlayer?.points}</span>
        <span>{currentPlayer?.DOB}</span>
        <span>{currentPlayer?.age}</span>


      </div>
    </div>
  );
};

export default PlayerCard;
