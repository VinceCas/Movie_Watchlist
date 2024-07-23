import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";
import Navbar from "../components/Navbar";

const WatchedPage = () => {

  const {watched} = useContext(GlobalContext);


  return (
    <section className=" bg-[#212124] min-h-screen">
      <Navbar />
      <h1 className="josefin-sans-bold text-lg text-white items-center justify-center flex fade-up">
        Watched Page
      </h1>

      {watched.length > 0 ? (
        <div className="flex justify-center fade-delay">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 py-20 mx-5">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="josefin-sans-semi text-lg text-white items-center justify-center flex py-[30%]">
          No items here
        </h1>
      )}
    </section>
  );
};

export default WatchedPage;
