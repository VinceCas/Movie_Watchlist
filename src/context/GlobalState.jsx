import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.jsx";

// Initial state
const initialState = {
    watchlist: [],
    watched: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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
