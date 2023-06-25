import React, { useState, useEffect } from "react";
import SuggestionCard from "./SuggestionCard";
import { Link } from "react-router-dom";

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
        <h1 className=" mt-5 text-2xl font-bold text-gray-700">
          More {currentPlayer?.type} you might be interested in:
        </h1>
        <div className="flex justify-start flex-wrap">
          {recommendedPlayer?.slice(0, 4)?.map((player) => (
            <Link to={`/player/${player.id.slice(1)}`}>
              <SuggestionCard key={player.id} currentPlayer={player} />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default PlayersSuggestion;
