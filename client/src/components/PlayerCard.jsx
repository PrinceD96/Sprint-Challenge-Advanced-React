import React from "react";

const PlayerCard = ({ players }) => {
	return players.map((player, idx) => (
		<div key={idx}>
			<h1>{player.name}</h1>
			<p>{player.country}</p>
			<p>Searches: {player.searches}</p>
		</div>
	));
};

export default PlayerCard;
