import React, { Component } from 'react'

function Warning (props) {
	if (!props.warn) {
		return null
	}
	return (
		<div>
			this is a warn
		</div>
		)
}

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {showWarn: false}
		this.toggleWarn = this.toggleWarn.bind(this)
	}
	toggleWarn () {
		this.setState(prevState => ({
			showWarn: !prevState.showWarn
		}))
	}
	render () {
		return (
				<div>
					<h1>component, {this.props.name}</h1>
					<button onClick={this.toggleWarn}>
						{this.state.showWarn ? 'hideWarn' : 'showWarn'}
					</button>
					<Warning warn={this.state.showWarn} />
				</div>
			)
	}
}

export default Page;
