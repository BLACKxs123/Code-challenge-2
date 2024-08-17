import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const addBotToArmy = bot => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBotFromArmy = bot => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = bot => {
    axios.delete(`http://localhost:8001/bots/${bot.id}`)
      .then(() => {
        setArmy(army.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} releaseBot={releaseBotFromArmy} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
    </div>
  );
}

export default App;
