import React, { useState, useEffect } from "react";
import TableHeader from "../components/Table/TableHeader";
import TableBody from "../components/Table/TableBody";
import TableHeaderOptions from "../components/Table/TableHeaderOptions";
import Pagination from "../components/Pagination";
import getPlayers from "../data/getPlayers";
import TableError from "../assets//images/table__error.png";

const Home = () => {
  const [playersList, setPlayersList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [searchValue, setSearchValue] = useState(null);
  const [filteredPlayersList, setFilteredPlayersList] = useState([]);

  useEffect(() => {
    const getPlayersList = async () => {
      let response = await getPlayers();
      setPlayersList(response);
      setFilteredPlayersList(response);
    };
    getPlayersList();
  }, []);

  useEffect(() => {
    const searchPlayersByName = (searchValue) => {
      return playersList?.filter((player) => {
        return player?.name?.toLowerCase().includes(searchValue?.toLowerCase());
      });
    };

    setFilteredPlayersList(searchPlayersByName(searchValue));
  }, [searchValue]);

  return (
    <div className="p-10">
      <div className="h-screen text-gray-900">
        <main className="mx-auto max-w-4xl px-4 pt-4">
          <h1 className="text-xl font-bold text-gray-700">
            Trending List of Players
          </h1>
          <div className="mx-auto mb-4">
            <TableHeaderOptions
              setSearchValue={setSearchValue}
              playersList={playersList}
              setFilteredPlayersList={setFilteredPlayersList}
            />
            <div className="flex w-full flex-col rounded-lg border p-1.5">
              <table>
                <TableHeader
                  filteredPlayersList={filteredPlayersList}
                  setFilteredPlayersList={setFilteredPlayersList}
                />
                <TableBody playersList={filteredPlayersList} pageNo={pageNo} />
              </table>
              {filteredPlayersList.length === 0 && (
                <div className="ml-70 my-10 flex items-center justify-center">
                  <img
                    src={TableError}
                    className="repeat w-60"
                    alt="empty table error"
                  />
                </div>
              )}
              {filteredPlayersList.length !== 0 && (
                <Pagination
                  pageNo={pageNo}
                  setPageNo={setPageNo}
                  playersList={filteredPlayersList}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
