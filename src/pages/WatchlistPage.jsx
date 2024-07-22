import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Navbar from "../components/Navbar";
import { MovieCard } from "../components/MovieCard";

const WatchlistPage = () => {
  //accessing the localStorage database
  const { watchlist } = useContext(GlobalContext);

  return (
    <section className=" bg-[#212124] min-h-screen">
      <Navbar />
      <h1 className="josefin-sans-bold text-lg text-white items-center justify-center flex">
        Watch List Page
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 mx-5">
          {watchlist.map((movie) => (
            <MovieCard movie={movie} type="watchlist"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchlistPage;
