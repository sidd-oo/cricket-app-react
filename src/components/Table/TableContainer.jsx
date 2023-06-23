import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableHeaderOptions from "./TableHeaderOptions";
import Pagination from "../Pagination";
import getPlayers from "../../data/getPlayers";

const TableContainer = () => {
  const [playersList, setPlayersList] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const getPlayersList = async () => {
      let response = await getPlayers();
      setPlayersList(response);
    };
    getPlayersList();
  }, []);

  console.log(playersList);
  return (
    <div className="mx-auto p-10">
      <div className="min-h-screen text-gray-900">
        <main className="mx-auto max-w-3xl px-4 pt-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-700">
            Trending List of Players
          </h1>
          <div className="mb-4">
            <TableHeaderOptions />
            <div className="flex w-full flex-col rounded-lg border p-1.5">
              <table className="min-w-full">
                <TableHeader />
                <TableBody playersList={playersList} pageNo={pageNo} />
              </table>
              <Pagination pageNo={pageNo} setPageNo={setPageNo} playersList={playersList}/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TableContainer;
