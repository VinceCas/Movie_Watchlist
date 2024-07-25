import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import AppReducer from "./AppReducer.jsx";

// Initial state (connected to UseEffect line 18)
const initialState = {
  watchlist: [],
  watched: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Load initla data from JSON server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const watchlistResponse = await axios.get(
          "https://movielistbackend-k91c.onrender.com/watchlist"
        );
        const watchedResponse = await axios.get(
          "https://movielistbackend-k91c.onrender.com/watched"
        );

        dispatch({ type: "SET_WATCHLIST", payload: watchlistResponse.data });
        dispatch({ type: "SET_WATCHED", payload: watchedResponse.data });
      } catch (error) {
        console.error("Error fetching data from JSON server", error);
      }
    };
    fetchData();
  }, []);

  //Function (add a movie to watchlist or watched page)
  const addMovieToWatchlist = async (movie) => {
    try {
      await axios.post("https://movielistbackend-k91c.onrender.com/watchlist", movie);
      dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    } catch (error) {
      console.error("Error adding movie to watchlist", error);
    }
  };

  //Function (remove a movie from watchlist)
  const removeMovieFromWatchlist = async (id) => {
    try {
      await axios.delete(`https://movielistbackend-k91c.onrender.com/watchlist/${id}`);
      dispatch({ type: "REMOVE_MOVIE_TO_WATCHLIST", payload: id });
    } catch (error) {
      console.error("Failed removing move from watchlist", error);
    }
  };

  //Function (add a movie to watched from the watchlist)
  const addMovieToWatched = async (movie) => {
    try {
      await axios.post("https://movielistbackend-k91c.onrender.com/watched", movie);
      dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    } catch (error) {
      console.error("Error adding movie to watched", error);
    }
  };

  //Function (remove a movie from watched going back to watchlist)
  const moveToWatchList = async (movie) => {
    try {
      await axios.post("https://movielistbackend-k91c.onrender.com/watchlist", movie);
      await axios.delete(`https://movielistbackend-k91c.onrender.com/watched/${movie.id}`);
      dispatch({ type: "MOVE_BACK_TO_WATCHLIST", payload: movie });
    } catch (error) {
      console.error("Error moving movie back to watchlist", error);
    }
  };

  //Function (remove a movie from watched)
  const removeMovieFromWatched = async (id) => {
    try {
      await axios.delete(`https://movielistbackend-k91c.onrender.com/watched/${id}`);
      dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
    } catch (error) {
      console.error("Error removing movie from watched", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchList,
        removeMovieFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
