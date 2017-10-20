import React from 'react';
import ListItem from './listItem.js'

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: ['文档', '指导', '社区', '博客'],
			active: 0
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick (elem, prop) {
		this.setState({
			active: prop.id
		})
		this.props.selectType(prop.id)
	}
	render() {
		return (
			<ul className='nav_list pull-left'>
				{
					this.state.list.map((item, idx) => {
						return <ListItem click={this.handleClick} value={item} id={idx} key={idx} active={idx === this.state.active ? true : false} />
					})
				}
			</ul>
		);
	}
}