// 下面是几个适合使用 refs 的情况：
// 处理焦点、文本选择或媒体控制。
// 触发强制动画。
// 集成第三方 DOM 库
import React from 'react';
export default class refsAndDom extends React.Component {
	constructor(props) {
		super(props);
		this.focus = this.focus.bind(this);
	}
	focus () {
		this.textInput.focus();
	}
	render() {
		// ref不能在函数式组件中使用，只能在class组件中使用
		return (
			<div>
				<input
					type="text"
					ref={(input) => {this.textInput = input; }} />
				<input type="button" value="Focus the text input" onClick={this.focus}/>
			</div>
		);
	}
}
