import React, { Component } from 'react'

function ListItem (props) {
	return (
		<li>这是第{props.value}个</li>
		)
}

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: props.lists ? props.lists : []
		}
	}
	render () {
		// let listsItem = this.state.lists.map((list, idx) => 
		// 	<li key={idx.toString()}>这是第{list}个</li>
		// )
		// return (
		// 	<ul>
		// 		{listsItem}
		// 	</ul>
		// 	)
		
		// 在渲染函数中使用map
		return (
			<ul>
				{
					this.state.lists.map((list, idx) =>
						<ListItem key={idx} value={list} /> 
					)
				}
			</ul>
			)
	}
}

export default List;
