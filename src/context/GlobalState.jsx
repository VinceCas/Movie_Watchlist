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

    // Actions (add to watchlist or watched page)
    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    return (
        <GlobalContext.Provider 
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                addMovieToWatchlist,
            }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
