import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"

class App extends React.Component {
	// overwriting the constructor function inside React.Component
	// super is a reference to React.Component constructor function
	// need to call super(props) every time
	// state is always initialized inside the constructor
	// constructor(props) {
	// 	super(props)

	// 	this.state = { lat: null, errorMessage: "" }
	// }

	state = { lat: null, errorMessage: "" }

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		)
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />
		}

		return <Spinner text={"Waiting for location..."} />
	}

	// Every class component NEEDS to have render method defined
	render() {
		return <div>{this.renderContent()}</div>
	}
}

ReactDOM.render(<App />, document.querySelector("#root"))
