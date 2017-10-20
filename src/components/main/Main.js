import React from 'react';
import Doc from './doc.js'
import Guide from './guide.js'
import Community from './community.js'
import Blog from './blog.js'
export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let comp = null
		switch (this.props.type) {
			case 'doc':
			comp = <Doc />;
			break;
			case 'guide':
			comp = <Guide />;
			break;
			case 'community':
			comp = <Community />;
			break;
			case 'blog':
			comp = <Blog />;
			break;
		}
		return (
			<div>
				{comp}
			</div>
		);
	}
}