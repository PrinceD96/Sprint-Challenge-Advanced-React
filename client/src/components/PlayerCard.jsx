import React from "react";

const PlayerCard = ({ players }) => {
	return players.map((player, idx) => (
		<div key={idx} className='card'>
			<h3>{player.name}</h3>
			<p>{player.country}</p>
			<p>Searches: {player.searches}</p>
		</div>
	));
};

export default PlayerCard;
