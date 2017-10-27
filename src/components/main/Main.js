import React from 'react';
import Doc from './doc.js'
import Guide from './guide.js'
import Community from './community.js'
import Blog from './blog.js'

const components = {
	doc: Doc,
	guide: Guide,
	community: Community,
	blog: Blog
}

function Comp (type) {
	let Comp = components[type]
	return <Comp />
}

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{Comp(this.props.type)}
			</div>
		);
	}
}