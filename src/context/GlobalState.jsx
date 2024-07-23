import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer.jsx";

// Initial state (connected to UseEffect line 18)
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched:  localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//saves the movie added to watchlist(localstorage only)
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    },[state])

    //Function (add a movie to watchlist or watched page)
    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    //Function (remove a movie from watchlist)
    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_TO_WATCHLIST", payload: id})
    }

    //Function (add a movie to watched from the watchlist)
    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie})
    }

    //Function (remove a movie from watched going back to watchlist)
    const moveToWatchList = (movie) => {
        dispatch({ type: "MOVE_BACK_TO_WATCHLIST", payload: movie})
    }

    //Function (remove a movie from watched)
    const removeMovieFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_TO_WATCHED", payload: id})
    }

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
            }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
