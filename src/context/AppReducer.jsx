const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload]
            };
        default:
            return state;
    }
};

export default AppReducer;
