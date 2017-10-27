import React from 'react';

var Components = {
	PickDate: function PickDate (props) {
		return (
			<div>
				你好，{props.name}
			</div>
			)
	}
}

function Repeat (props) {
	let items = [];
	for (let i = 0; i < props.numTimes; i++) {
		items.push(props.children(i))
	}
	return <div>{items}</div>
}

function ListOfTenThings () {
	return (
			<Repeat numTimes={10}>
				{(index) => <p key={index}> This is item {index} in the list </p>}
			</Repeat>
		)
}

export default class AboutJSX extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>深入理解 JSX</h1>
				<Components.PickDate name="点表示法" />
				<Components.PickDate name={"同上方等价"} />
				<p>{1 + 2 + 3}</p>
				<ListOfTenThings />
			</div>
		);
	}
}
