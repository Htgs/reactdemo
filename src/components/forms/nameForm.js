import React, { Component } from 'react'

// 受控组件 input
class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''}
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
				<label htmlFor='name'>
					Name:
					<input type='text' id='name' name='name' onChange={this.handleValueChange} value={this.state.value}/>
				</label>
				<input type='submit' value='提交' />
			</form>
			)
	}
}

export default NameForm;
