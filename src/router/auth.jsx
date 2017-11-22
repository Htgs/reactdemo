import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom'

// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthRouter = () => (
	<Router>
		<div>
			<AuthButton />
			<ul>
				<li><Link to="/public">Public page</Link></li>
				<li><Link to="/protected">Protected page</Link></li>
			</ul>
			<Route path="/public" component={Public} />
			<Route path="/login" component={Login} />
			<PrivateRoute  path="/protected" component={Protected} />
		</div>
	</Router>
)

const fakeAuth = {
	isAuth: false,
	auth (cb) {
		this.isAuth = true
		setTimeout(cb, 100)
	},
	signout (cb) {
		this.isAuth = false
		setTimeout(cb, 100)
	}
}

const AuthButton = withRouter(({ history }) => (
	fakeAuth.isAuth ? (
		<p>
			welcome!
			<button onClick={() => {
				fakeAuth.signout(() => history.push('/'))
			}}>Sign out</button>
		</p>
	) : (
		<p>not logged</p>
	)
))

const PrivateRoute = (/*a*/{ component: Component, ...rest }) => (
	// console.log(a)
	/*
	a打印的结果是
	{
		component:ƒ Protected(),
		path: "/protected"
	}
	 */
	<Route {...rest} render={props => (
		fakeAuth.isAuth ? (
			<Component { ...props } />
		) : (
			<Redirect to={{
				pathname: '/login',
				state: {from: props.location}
			}} />
		)
	)} />
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
	state = {
		redirectToReferrer: false
	}

	// 使用箭头函数绑定this
	login = () => {
		fakeAuth.auth(() => {
			this.setState({ redirectToReferrer: true })
		})
	}

	render () {
		//console.log(this.props) // Route 传入的路由参数
		const { from } = this.props.location.state || { from: { pathname: '/' } }
		const { redirectToReferrer } = this.state

		if (redirectToReferrer) {
			return (
				<Redirect to={from} />
			)
		}

		return (
			<div>
				<p>You must log in to view the page at {from.pathname}</p>
				<button onClick={this.login} >Log in</button>
			</div>
		)
	}
}

export default AuthRouter
