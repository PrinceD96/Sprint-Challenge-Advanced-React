import React from "react";
import { Table } from "reactstrap";

const PlayerCard = ({ players }) => {
	return (
		<>
			<Table hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Country</th>
						<th>Search Score</th>
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
		</>
	);
};

export default PlayerCard;

{
	/* <Table hover>
	<thead>
		<tr>
			<th>#</th>
			<th>Name</th>
			<th>Country</th>
			<th>Searches</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope='row'>1</th>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
		</tr>
		<tr>
			<th scope='row'>2</th>
			<td>Jacob</td>
			<td>Thornton</td>
			<td>@fat</td>
		</tr>
		<tr>
			<th scope='row'>3</th>
			<td>Larry</td>
			<td>the Bird</td>
			<td>@twitter</td>
		</tr>
	</tbody>
</Table>; */
}
