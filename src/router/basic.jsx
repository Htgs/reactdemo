import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

class Basic extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">home</Link></li>
						<li><Link to="/about">about</Link></li>
						<li><Link to="/topics">topics</Link></li>
					</ul>

					<hr />

					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/topics" component={Topics}/>
				</div>
			</Router>
			)
	}
}

function Home () {
	return (
		<div><h2>Home</h2></div>
		)
}

function About () {
	return (
		<div><h2>About</h2></div>
		)
}

const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		<ul>
			<li><Link to={`${match.url}/rendering`}>rendering</Link></li>
			<li><Link to={`${match.url}/component`}>component</Link></li>
			<li><Link to={`${match.url}/props`}>props</Link></li>
		</ul>
		<Route path={`${match.url}/:type`} component={Topic} />
		<Route exact path={`${match.url}`} render={() => (
			<h3>plz select a topic</h3>
		)} />
	</div>
)

function Topic (route, a) {
	console.log(route.match)
	console.log(a)
	return (
		<div><h3>{route.match.params.type}</h3></div>
		)
}

export default Basic
