import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
}

export class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this)
	}

	// 通过执行父组件传入的方法实现同级组件数据交流
	handleChange (e) {
		this.props.onTemperatureChange(e.target.value)
	}

	render() {
		const temperature = this.props.temperature
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>this is {scaleNames[scale]}</legend>
				<input type='number' value={temperature} onChange={this.handleChange} />
			</fieldset>
		);
	}
}

export default TemperatureInput;
