import React from "react";
import "./App.scss";
import PlayerCard from "./components/PlayerCard";
import DarkMode from "./components/DarkMode";
import Chart from "./components/Chart";

class App extends React.Component {
	state = {
		players: []
	};

	componentDidMount() {
		fetch("http://localhost:5000/api/players")
			.then(response => response.json())
			.then(data => this.setState({ players: data }))
			.catch(error => console.log("Error in componentDidMount", error));
	}

	render() {
		return (
			<>
				<DarkMode />
				<h1 className='title'>World Cup Players</h1>
				<div className='App'>
					<PlayerCard players={this.state.players} />
					<Chart players={this.state.players.slice(0, 5)} />
				</div>
			</>
		);
	}
}

export default App;
