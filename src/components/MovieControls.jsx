import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { cancel, hidden, view } from "../assets";

export const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchList, removeMovieFromWatched } =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls flex items-center justify-center ">
      {type === "watchlist" && (
        <>
          <div className=" flex flex-row justify-center items-center gap-4 ">
            <button
              className=" flex h-[30px] w-[30px] hover:scale-110 transition-transform duration-200"
              onClick={() => addMovieToWatched(movie)}
            >
              <img src={view} alt="watched" />
            </button>

            <button
              className=" flex h-[20px] w-[20px] hover:scale-125 transition-transform duration-200"
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              <img src={cancel} alt="watched" />
            </button>
          </div>
        </>
      )}

      {type === "watched" && (
        <>
          <div className=" flex flex-row justify-center items-center gap-4 ">
            <button
              className=" flex h-[30px] w-[30px] hover:scale-110 transition-transform duration-200"
              onClick={() => moveToWatchList(movie)}
            >
              <img src={hidden} alt="watched" />
            </button>

            <button
              className=" flex h-[20px] w-[20px] hover:scale-125 transition-transform duration-200"
              onClick={() => removeMovieFromWatched(movie.id)}
            >
              <img src={cancel} alt="watched" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
