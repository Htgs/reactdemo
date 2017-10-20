import React from 'react';
import './App.css'
// 顶部导航组件
import Nav from './components/layout/Nav.js'
// 主题部分
import Main from './components/main/Main.js'
// react官方文档理念
import ReactEx from './components/example/ReactEx.js'

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
		return (
			<div>
				<Nav selectType={this.handleChangeCurrentMain}/>
				<Main type={this.state.currentMain}/>
				<ReactEx />
			</div>
		);
	}
}

export default App
