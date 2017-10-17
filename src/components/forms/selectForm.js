import React, { Component } from 'react'

// 受控组件 select
class SelectForm extends Component {
	constructor(props) {
		super(props);
		this.state = {value: 'bb'}
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
					fav:
					<select value={this.state.value} onChange={this.handleValueChange}>
						<option value='aa'>aa</option>
						<option value='bb'>bb</option>
						<option value='cc'>cc</option>
						<option value='dd'>dd</option>
					</select>
				</label>
				<input type='submit' value='提交' />
			</form>
			)
	}
}

export default SelectForm;
