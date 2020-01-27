import React from "react";
import "./App.scss";
import PlayerCard from "./components/PlayerCard";

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
			<div className='App'>
				<PlayerCard players={this.state.players} />
			</div>
		);
	}
}

export default App;
