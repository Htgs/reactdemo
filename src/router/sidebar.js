import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const routes = [
	{
		path: '/',
		exact: true,
		sidebar: () => <div>home!</div>,
		main: () => <h2>Home</h2>
	},
	{
		path: '/bubblegum',
		sidebar: () => <div>bubblegum!</div>,
		main: () => <h2>Bubblegum</h2>
	},
	{
		path: '/shoelaces',
		sidebar: () => <div>shoelaces!</div>,
		main: () => <h2>Shoelaces</h2>
	}
]

const Sidebar = () => (
	<Router>
		<div style={{ display: 'flex' }}>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/bubblegum">bubblegum</Link></li>
					<li><Link to="/Shoelaces">Shoelaces</Link></li>
				</ul>
				{routes.map((route, index) => {
					console.log(route)
					console.log(index)
					return (
						<Route 
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.sidebar}
						/>
					)
				})}
			</div>
			<div style={{ flex: 1, padding: '10px' }}>
				{routes.map((route, index) => (
					<Route 
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				))}
			</div>
		</div>
	</Router>
)

export default Sidebar
