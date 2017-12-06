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

import RefsAndDom from './components/advanced/refsAndDom.js'

import UnController from './components/advanced/uncontrolled-components.js'

// react-router
import BasicRouter from './router/basic.jsx'
import UrlParamsRouter from './router/urlParams.jsx'
import Auth from './router/auth.jsx'
import CustomLink from './router/customLink.jsx'
import PreventingTransitions from './router/preventingTransitions.jsx'
import NoMatch from './router/nomatch.js'
import Recursive from './router/recursivePaths.js'
import Sidebar from './router/sidebar.js'
import Ambiguous from './router/ambiguous.js'
import AnimatedTransitions from './router/animatedTransitions.js' // css插件使用不了
import StaticRouter from './router/staticRouter.jsx' // ? 服务器端渲染
import ModalGallery from './router/modalGallery.js'
import ConfigRoutre from './router/routeConfig.js'

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
				<RefsAndDom />
				<UnController />
				<ConfigRoutre />
			</div>
		);
	}
}

export default App
