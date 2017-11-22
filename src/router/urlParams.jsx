import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

class UrlParams extends React.Component {
	constructor () {
		super()
	}

	render () {
		return (
			<Router>
				<div>
					<h2>bbbb</h2>
					<ul>
						<li><Link to="/netflix">Nef</Link></li>
						<li><Link to="/bbs">bbs</Link></li>
						<li><Link to="/qqas">qqas</Link></li>
					</ul>

					<Route path="/:id" component={Child}/>
				</div>
			</Router>
		)
	}
}

const Child = ({ match }) => (
	<div>
		<h3>ID: {match.params.id}</h3>
	</div>
)

export default UrlParams
