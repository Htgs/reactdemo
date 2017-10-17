import React, { Component } from 'react'

// 受控组件 textarea
class TxtForm extends Component {
	constructor(props) {
		super(props);
		// 这个默认值不起效了？
		this.state = {value: 'Please write an essay about your favorite DOM element.'}
		this.handleValueChange = this.handleValueChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleValueChange (e) {
		this.setState({
			value: e.target.value
		})
	}

	handleSubmit (e) {
		console.dir(this.state.value)
		e.preventDefault()
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<textarea value={this.state.value} onChange={this.handleValueChange} />
				</label>
				<input type='submit' value='提交' />
			</form>
			)
	}
}

export default TxtForm;
