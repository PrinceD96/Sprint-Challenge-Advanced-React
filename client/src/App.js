import React from "react";
import "./App.scss";

class App extends React.Component {
	state = "";

	componentDidMount() {
		fetch("http://localhost:5000/api/players")
			.then(response => response.json())
			.then(data => this.setState({ data }))
			.catch(error => console.log("Error in componentDidMount", error));
	}

	render() {
		return (
			<div className='App'>{this.state ? console.log(this.state) : null}</div>
		);
	}
}

export default App;
