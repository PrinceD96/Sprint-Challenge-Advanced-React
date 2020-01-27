import React from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ReferenceLine
} from "recharts";

const Chart = ({ players }) => {
	const graphData = players.map(player => {
		return { "name": player.name, "Searches": player.searches };
	});

	return (
		<div className='chart'>
			<h3>Top 5 Ranked by Search</h3>
			<BarChart
				width={800}
				height={300}
				data={graphData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5
				}}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<ReferenceLine y={0} stroke='#000' />
				<Bar dataKey='Searches' fill='lightskyblue' />
			</BarChart>
		</div>
	);
};

export default Chart;
