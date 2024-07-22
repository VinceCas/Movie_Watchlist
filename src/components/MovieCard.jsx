import React from "react";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="">
      <div className=""></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="h-[200px] mx-2 rounded-lg"
        />
      ) : (
        <div className="filler-poster h-[100px] w-[68px] mx-2 bg-gray-300 rounded-lg"></div>
      )}
    </div>
  );
};
