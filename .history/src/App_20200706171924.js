import React from "react";
import Header from "./components/Header";
import { PlayersProvider } from "./context/PlayersContext";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
