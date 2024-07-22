import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find(o => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className="result-card flex flex-row items-start justify-start p-4">
      <div className="flex-shrink-0">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="h-[100px] mx-2 rounded-lg"
          />
        ) : (
          <div className="filler-poster h-[100px] w-[68px] mx-2 bg-gray-300 rounded-lg"></div>
        )}
      </div>
      <div className="info flex flex-col justify-center ml-4">
        <div className="header">
          <h3 className="title text-white text-lg josefin-sans-bold">
            {movie.title}
          </h3>
          <h4 className="release_date text-gray-400 josefin-sans-semi">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button 
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
            className="btn md:mt-2 mt-0 bg-[#FF8D1B] h-[45px] p-3 rounded-2xl josefin-sans-bold text-center text-[14px] hover:scale-105 transition-transform duration-200">
            Add to Watch List
          </button>
        </div>
      </div>
    </div>
  );
};
