import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const CustomLink = () => (
	<Router>
		<div>
			<CustomMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
			<CustomMenuLink to="/about" label="About" />
			<hr />
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</div>
	</Router>
)

const CustomMenuLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
		<div className={match ? 'active' : ''}>
			{match ? '>' : ''}<Link to={to}>{label}</Link>
		</div>
	)} />
)

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

export default CustomLink
