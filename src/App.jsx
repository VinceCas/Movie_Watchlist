import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import SearchPage from "./pages/SearchPage";
import WatchedPage from "./pages/WatchedPage";

import { GlobalProvider } from "./context/GlobalState.jsx";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/watched" element={<WatchedPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
