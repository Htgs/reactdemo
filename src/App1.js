import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/page.js'
import Clock from './components/clock.js'
import Ev from './components/event.js'
import Condition from './components/condition.js'
import List from './components/list.js'
// import TheForm from './components/form.js'
import NameForm from './components/forms/nameForm.js'
import TxtForm from './components/forms/txtForm.js'
import SelectForm from './components/forms/selectForm.js'
import MutliInputForm from './components/forms/mutliInputForm.js'
import State from './components/state/state.js'
import Combination from './components/combination/Combination.js'

var de1 = 'fddd'

//  React DOM 使用 camelCase 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称。
//  例如，class 变成了 className，而 tabindex 则对应着 tabIndex.
const element = (<h1 className="title" data-idx="1">eeee</h1>); // 推荐在 JSX 代码的外面扩上一个小括号，这样可以防止 分号自动插入 的bug

const element1 = React.createElement('h1', {className: 'title'}, 'emmmmmmmmmmm');

const el = (<img src={de1} />);
let n = {
  a: 'b',
  b: 'a'
}

function setName (name) {
  return name.a + name.b
}

function hello (flag) {
  if (flag) {
    return <h1>{setName(n)}</h1>
  } else {
    return <h1>hello</h1>
  }
}

function Compone (props) {
  return <h1>component, {props.name}</h1>
}

// 组件的首字母必须大写
const co = <Compone name="ddd" />

const page = <Page name="mdzz" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p data-name={setName(n)}>{setName(n)}</p>
        {element}
        {element1}
        {hello(false)}
        {co}
        {page}
        <Clock />
        <Ev name="bsdx" />
        <Condition />
        <List lists={[1, 2, 3, 4, 5]} />
        <NameForm />
        <TxtForm />
        <SelectForm />
        <MutliInputForm />
        <State />
        <Combination
          color={'blue'}
          children={
            <h1>combination</h1>
          }
          left={
            <span>left</span>
          }
          right={
            <span>right</span>
          }/>
      </div>
    );
        // <TheForm />
  }
}

export default App;

//支持的代码片段如下
// cdm→  componentDidMount: fn() { ... }
// cdup→  componentDidUpdate: fn(pp, ps) { ... }
// cs→  var cx = React.addons.classSet;
// cwm→  componentWillMount: fn() { ... }
// cwr→  componentWillReceiveProps: fn(np) { ... }
// cwu→  componentWillUpdate: fn(np, ns) { ... }
// cwun→  componentWillUnmount: fn() { ... }
// cx→  cx({ ... })
// fdn→  React.findDOMNode(...)
// fup→  forceUpdate(...)
// gdp→  getDefaultProps: fn() { return {...} } 
// gis→  getInitialState: fn() { return {...} } 
// ism→  isMounted()
// props→  this.props.
// pt→  propTypes { ... }
// rcc→  component skeleton
// refs→  this.refs.
// ren→  render: fn() { return ... }
// scu→  shouldComponentUpdate: fn(np, ns) { ... }
// sst→  this.setState({ ... })
// state→  this.state.