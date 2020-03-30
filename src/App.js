import React, { useContext, useReducer } from "react";

import Store from "./store";
import reducer from "./reducer";

import { useStorageReducer, useSavedState } from "./useStorage";

import ScoreCard from "./components/ScoreCard";
import Header from "./components/Header";
import Board from "./components/Board";
import ClearButton from "./components/ClearButton";
import Logo from "./components/Logo";
import BingoOverlay from "./components/BingoOverlay";

function App() {
  const store = useSavedState(useContext(Store));
  const [state, dispatch] = useStorageReducer(useReducer(reducer, store));

  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className="main-content">
        <ScoreCard />
        <Header />
        <Board />
        <ClearButton />
        <Logo />
        <BingoOverlay />
      </div>
    </Store.Provider>
  );
}

export default App;
