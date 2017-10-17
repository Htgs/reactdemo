import React, { Component } from 'react'
import HotWater from './hotwater.js'
import TemperatureInput from './temperatureInput.js'

function toCelsius (fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit (celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert (temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) return '';
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

// 状态提升
// 不同组件间数据变换
class State extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			temperature: '',
			scale: 'c'
		}
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
	}
	handleCelsiusChange (temperature) {
		this.setState({scale: 'c', temperature})
	}
	handleFahrenheitChange (temperature) {
		this.setState({scale: 'f', temperature})
	}
	render () {
		const scale = this.state.scale;
		const temperature = this.state.temperature

		// 把不同的数据传入到不同的组件中
		// react中没有通讯方法
		// 属性和方法都是由父组件传入子组件中
		// 在子组件中改变的props通过父组件传入的方法来改变父组件的状态
		// 想要在不同的子组件之间实现数据交流，就需要在父组件中确定状态
		// 如果在三级以上的组件层实现同级的数据交流，传递值会不会很复杂？
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
		return (
			<div>
				<TemperatureInput 
					scale='c'
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput 
					scale='f' 
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange}/>
				<HotWater temperature={parseFloat(celsius)}/>
			</div>
			)
	}
}

export default State;
