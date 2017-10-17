import React from 'react';

export class Combination extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{'color': this.props.color}}>
				{this.props.children}
			</div>
		);
	}
}

export default Combination
