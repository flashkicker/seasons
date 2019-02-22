import React from "react"

const Spinner = props => {
	const { text } = props
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{text}</div>
		</div>
	)
}

Spinner.defaultProps = {
	text: "Loading..."
}

export default Spinner
