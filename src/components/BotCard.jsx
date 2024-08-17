import React from 'react';

function BotCard({ bot, onClick, onDischarge }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <div className="bot-stats">
        <span>Health: {bot.health}</span>
        <span>Damage: {bot.damage}</span>
        <span>Armor: {bot.armor}</span>
      </div>
      {onDischarge && (
        <button className="discharge-button" onClick={e => { e.stopPropagation(); onDischarge(); }}>
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;
