import React from 'react';
import './App.css'
// 顶部导航组件
import Nav from './components/layout/Nav.js'
// 主题部分
import Main from './components/main/Main.js'
// react官方文档理念
import ReactEx from './components/example/ReactEx.js'

import AboutJSX from './components/advanced/aboutJSX.js'

import PropType from './components/advanced/proptype.js'

const com = {
	AboutJSX: AboutJSX,
	PropType: PropType
}

function Com () {
	let Com = com['PropType']
	return <Com />
}

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMain: 'doc'
		}
		this.handleChangeCurrentMain = this.handleChangeCurrentMain.bind(this)
	}
	handleChangeCurrentMain (current) {
		this.setState({
			currentMain: current
		})
	}
	render() {
		// 首字母需要大写
		// 动态组件需要赋值给首字母大写的变量
		return (
			<div>
				<Nav selectType={this.handleChangeCurrentMain}/>
				<Main type={this.state.currentMain}/>
				<ReactEx />
				<Com name={1}/>
			</div>
		);
	}
}

export default App
