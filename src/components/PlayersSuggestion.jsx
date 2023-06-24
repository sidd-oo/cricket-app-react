import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

const PlayersSuggestion = ({ playersList, currentPlayer }) => {
  const [recommendedPlayer, setRecommendedPlayer] = useState([]);

  useEffect(() => {
    const fetchSimilarPlayers = (type) => {
      const players = playersList
        ?.filter((player) => {
          return player.type === type;
        })
        ?.filter((player) => {
          return player.id !== currentPlayer?.id;
        });

      setRecommendedPlayer(players);
    };
    fetchSimilarPlayers(currentPlayer?.type);
  }, [currentPlayer, playersList]);

  if (recommendedPlayer?.length !== 0) {
    return (
      <div className="mb-20">
        <h1 className="mt-10 text-xl font-bold text-gray-700">
          More {currentPlayer?.type} you might be interested in:
        </h1>
        <div className="flex flex-wrap gap-5">
          {recommendedPlayer?.map((player) => (
            <PlayerCard key={player.id} currentPlayer={player} />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default PlayersSuggestion;
