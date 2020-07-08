import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Input from "./components/Input";
import { PlayersProvider } from "./context/PlayersContext";
import "./App.css";

function App() {
  return (
    <PlayersProvider>
      <div>
        <Header />
        <Board />
        <Input />
      </div>
    </PlayersProvider>
  );
}

export default App;
