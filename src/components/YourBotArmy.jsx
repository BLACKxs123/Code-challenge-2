import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="your-bot-army">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => releaseBot(bot)}
            onDischarge={() => dischargeBot(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
