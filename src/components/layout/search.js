import React from 'react';
export default class search extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleKeyUp = this.handleKeyUp.bind(this)
	}
	handleSubmit (e) {
		e.preventDefault();
	}
	handleKeyUp (e) {
		if (e.keyCode === 13) {
			console.dir('发送请求')
		}
	}
	render() {
		return (
			<div className='nav_search pull-right'>
				<form onSubmit={this.handleSubmit}>
					<i>搜</i>
					<input type="text" placeholder="搜索文档" onKeyUp={this.handleKeyUp} />
				</form>
			</div>
		);
	}
}