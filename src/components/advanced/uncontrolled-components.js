import React from 'react';
export default class UnControlled extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
  	console.dir(this.input.value);
  	e.preventDefault();
  }
  render() {
  	//在 React 的生命周期中，表单元素上的 value 属性将会覆盖 DOM 中的值
  	//使用defaultValue初始化默认值
    return (
      <form onSubmit={this.handleSubmit}>
      	<label>
      		name:
      		<input type="text" defaultValue="bbb" ref={(input) => this.input = input}/>
      	</label>
      	<input type="submit" value="提交"/>
      </form>
    );
  }
}