import React from "react";
import { Table } from "reactstrap";

const PlayerCard = ({ players }) => {
	return (
		<div className='table'>
			<h3>All Players Ranked by Search</h3>
			<Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Country</th>
						<th>Searches</th>
					</tr>
				</thead>
				<tbody>
					{players.map((player, idx) => (
						<tr key={idx}>
							<td>{player.name}</td>
							<td>{player.country}</td>
							<td>{player.searches}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PlayerCard;
