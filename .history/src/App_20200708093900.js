import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import { PlayersProvider } from "./context/PlayersContext";
import "./App.css";

function App() {
  return (
    <PlayersProvider>
      <div>
        <Header />
        <Board />
      </div>
    </PlayersProvider>
  );
}

export default App;
