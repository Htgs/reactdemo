import React, { Component } from 'react'

// 多输入值处理
class MutliInputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: false,
			theNumber: 3
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange (e) {
		let target = e.target
		let name = target.name
		let value = target.type === 'checkbox' ? target.checked : target.value

		// ES6当中的计算属性名语法来更新与给定输入名称相对应的状态键
		this.setState({
			[name]: value
		})
	}

	render () {
		return (
			<form>
				<input type='checkbox' name='isChecked' checked={this.state.isChecked} onChange={this.handleChange} />
				<input type='number' name='theNumber' value={this.state.theNumber} onChange={this.handleChange} />
				<p>{this.state.isChecked ? 'a' : 'b'}</p>
				<p>{this.state.theNumber}</p>
			</form>
			)
	}
}

export default MutliInputForm;
