import React from 'react';
export default class listItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick (e) {
		this.props.click(e.target, this.props)
	}
	render() {
		return (
			<li onClick={this.handleClick} className={this.props.active ? 'active' : ''}>
				<a href="#">{this.props.value}</a>
			</li>
		);
	}
}
// function ListItem (props) {
// 	return (
// 		<li className={props.active ? 'active' : ''}>
// 			<a href='#'>{props.value}</a>
// 		</li>
// 		)
// }