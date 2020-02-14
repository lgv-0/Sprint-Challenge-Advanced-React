import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerContainer from "./components/getPlayers";
import useDarkMode from "./components/useDarkMode";

function App()
{
  const [darkMode, setDarkMode] = useDarkMode(false);

  let checkChange = function(e)
  {
    setDarkMode(e.target.checked);
  }

  return (
    <div className="App">
      <label htmlFor="darkchange">Dark-Mode</label>
      <input type="checkbox" id="darkchange" onChange={checkChange} checked={darkMode} />
      <PlayerContainer />
    </div>
  );
}

export default App;
