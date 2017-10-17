import React, { Component } from 'react'

class Ev extends Component {
	// 建议在构造函数中绑定或使用属性初始化器语法(实验性语法)
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: false
		}

		// 需要把事件绑定到当前这个类中，在事件中才能调用this
		this.handleClick = this.handleClick.bind(this)
	}

	// 阻止默认事件时不能使用return false
	// 必须使用e.preventDefault
	handleClick (e) {
		e.preventDefault();
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}))
	}

	// 使用箭头函数时，可以不使用bind方法把方法绑定到当前类中
	// 属性初始化器语法 (实验性)
	noBindHandleClick = () => {
		console.dir('this is', this)
	}

	render () {
		return (
			<div>
				<button onClick={this.handleClick}>{this.props.name}</button>
				<p>{this.state.isToggleOn ? 'aa' : 'bb'}</p>
				<button onClick={this.noBindHandleClick}>noBind</button>
			</div>
			)
	}
}

export default Ev;
