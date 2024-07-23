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
      <h1 className="josefin-sans-bold text-lg text-white items-center justify-center flex fade-up">
        Watch List Page
      </h1>

      {watchlist.length > 0 ? (
      <div className="flex justify-center fade-delay">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10 py-20 mx-5">
        {watchlist.map((movie) => (
          <MovieCard movie={movie} key={movie.id} type="watchlist"/>
        ))}
      </div>
    </div>
    ) : 
    <h1 className="josefin-sans-semi text-lg text-white items-center justify-center flex py-[30%]">
        No items here
      </h1>
    }     
    </section>
  );
};

export default WatchlistPage;
