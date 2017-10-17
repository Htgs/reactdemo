import React, { Component } from 'react'
import Greeting from './auth/greeting.js'
// import Login from './login.js'
// import Logout from './logout.js'

function Login (props) {
	return (
		<button onClick={props.onClick}>Login</button>
		);
}

function Logout (props) {
	return (
		<button onClick={props.onClick}>Logout</button>
		);
}

function Mailbox (props) {
	return (
		<div>
			mailbox
		</div>
		);
}

class Condition extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.state = {isLogged: false};
	}

	handleLogin () {
		this.setState({
			isLogged: true
		})
	}

	handleLogout () {
		this.setState({
			isLogged: false
		})
	}

	render () {
		const isLog = this.state.isLogged
		// 三目预算 以及  &&运算
		// true && expression 总是返回 expression
		// false && expression 总是返回 false
		// 因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它
		return (
			<div>
				<div>
					The user is <b>{isLog ? 'currently' : 'not'} logged</b>
				</div>
				<Greeting isLoggedIn={isLog} />
				{
					isLog ? (
							<Login onClick={this.handleLogout} />
						) : (
							<Logout onClick={this.handleLogin} />
						)
				}
				{ isLog && 
					<Mailbox />
				}
			</div>
			)
	}
}

export default Condition;
