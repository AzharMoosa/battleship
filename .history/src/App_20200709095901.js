import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import { PlayersProvider } from "./context/PlayersContext";
import "./App.css";
import PlaceShip from "./components/PlaceShip";

function App() {
  return (
    <PlayersProvider>
      <div>
        <Header />
        <Board />
        <PlaceShip />
      </div>
    </PlayersProvider>
  );
}

export default App;
