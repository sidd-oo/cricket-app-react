import React, { useState, useEffect } from "react";
import PlayerCard from "../components/PlayerCard";
import PlayersSuggestion from "../components/PlayersSuggestion";
import { Link, useParams } from "react-router-dom";
import getPlayers from "../data/getPlayers";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const PlayerInfo = () => {
  const { playerId } = useParams();
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    const getPlayersList = async () => {
      try {
        const list = await getPlayers();
        setPlayersList(list);
        const playerInfo = list.find(
          (player) => player.id.slice(1) === playerId
        );
        setCurrentPlayer(playerInfo);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    getPlayersList();
  }, [playerId]);

  return (
    <>
      <div className="mx-auto mb-5 mt-5 w-[80%]">
        <Link to="/" className="text-xl font-bold flex items-center gap-3">
            <BsFillArrowLeftCircleFill />
            <span className="text-xl font-bold underline text-gray-700">Back to Cricketers</span>
        </Link>
      </div>
      <div className="mx-auto w-[80%] flex-col gap-20 ">
        <PlayerCard currentPlayer={currentPlayer} />
        <PlayersSuggestion
          playersList={playersList}
          currentPlayer={currentPlayer}
        />
      </div>
    </>
  );
};

export default PlayerInfo;
