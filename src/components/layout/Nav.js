import React from 'react';
import './nav.css'
import Logo from './logo.js'
import List from './list.js'
import Search from './search.js'
import Links from './links.js'
// 让我们来看看每一条，找出哪一个是 state。每个数据只要考虑三个问题：
// 它是通过 props 从父级传来的吗？如果是，他可能不是 state。
// 它随着时间推移不变吗？如果是，它可能不是 state。
// 你能够根据组件中任何其他的 state 或 props 把它计算出来吗？如果是，它不是 state。
export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: ['doc', 'guide', 'community', 'blog']
		}
		this.handleSelect = this.handleSelect.bind(this)
	}
	handleSelect (id) {
		this.props.selectType(this.state.type[id])
	}
	render() {
		return (
			<div className='nav'>
				<div className='w clearfix'>
					<Logo />
					<List selectType={this.handleSelect}/>
					<Links />
					<Search />
				</div>
			</div>
		);
	}
}