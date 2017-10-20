import React from 'react';

export class Combination extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{'color': this.props.color}}>
				<div style={{'float': 'left'}}>
					{this.props.left}
				</div>
				<div style={{'float': 'right'}}>
					{this.props.right}
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default Combination
