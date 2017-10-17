import React, { Component } from 'react'
// 建议使用es6 中类的语法
class Clock extends Component {
	// props最好保持只读性，组件内不建议修props
	// state是组件内状态
	
	// 继承属性最好使用构造函数 
	constructor (props) {
		super(props);
		// 状态必须在构造函数中定义
		this.state = {
			date: new Date(),

			// 一些独立的状态
			// posts: [],
			// comments: []
		}
	}

	// 组件生命周期 组件第一次加载到DOM中的时候
	componentDidMount () {
		this.timeId = setInterval(
			() => this.tick()
			,1000)

		// 浅合并？？？？
		// fetchPosts().then(response => {
		// 	this.setState({
		// 		posts: response.posts
		// 	})
		// })
		// fetchComments().then(response => {
		// 	this.setState({
		// 		comments: response.comments
		// 	})
		// })
	}

	// 组件生命周期 组件生成的DOM被移除的时候
	componentWillUnmount () {
		clearInterval(this.timeId);
	}

	// 组件内方法
	tick () {
		// 状态不能够直接更新
		// 必须使用setState方法
		this.setState({
			date: new Date()
		})

		// 当props和state都是异步更新的时候
		// setState应当传入函数
		// this.setState((prevState, props) => {
		// 	counter: prevState.counter + props.increment
		// });
		// this.setState(function(prevState, props) {
		// 	return {
		// 		counter: prevState.counter + props.increment
		// 	};
		// });
	}

	// 渲染函数，必须
	render () {
		return (
			// 一个组件只能有一个根元素
				<div>
					<p>it is a clock</p>
					<p>ttt {this.state.date.toLocaleTimeString()}</p>
				</div>
			)
	}
}

// 在定义完组件后需要输出组件
export default Clock;
