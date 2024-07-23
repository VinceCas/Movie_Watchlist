import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="">
      <div className=""></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="h-[200px] transition-transform ease-in-out duration-300 hover:scale-105 mx-2 rounded-lg"
        />
      ) : (
        <div className="filler-poster h-[100px] w-[68px] mx-2 bg-gray-300 rounded-lg"></div>
      )}

      <MovieControls type={type} movie={movie}/>
    </div>
  );
};
