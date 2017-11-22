import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'

class NoMatch extends React.Component {
	render () {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/old-match">old match</Link></li>
						<li><Link to="/will-match">will match</Link></li>
						<li><Link to="/will-not-match">will not match</Link></li>
						<li><Link to="/not-match">not match</Link></li>
					</ul>
					<Switch>
						<Route path="/" exact component={Home} />
						<Redirect from="/old-match" to="/will-match" />
						<Route path="/will-match" component={WillMatch} />
						<Route component={NotMatch} />
					</Switch>
				</div>
			</Router>
		)
	}
}

const Home = () => (
	<h1>Home</h1>
)

const WillMatch = () => <h3>Matched!</h3>

const NotMatch = ({location}) => (
	<div>
		<h3>no Matched for {location.pathname}</h3>
	</div>
)

export default NoMatch
