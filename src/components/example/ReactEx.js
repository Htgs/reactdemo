import React from 'react';
import data from './data.js'

// function ProductCategoryRow (props) {
// 	return (
// 		<tr>
// 			<th colSpan="2">{props.category}</th>
// 		</tr>
// 		)
// }
class ProductCategoryRow extends React.Component {
	render () {
		return (
			<tr><th colSpan="2">{this.props.category}</th></tr>
		)
	}
}

// function ProductRow (props) {
// 	let name = props.stocked ? 
// 		props.name :
// 		<span style={{color: 'red'}}>{props.name}</span> 
// 	return (
// 		<tr>
// 			<td>
// 				{name}
// 			</td>
// 			<td>{props.price}</td>
// 		</tr>
// 	)
// }
class ProductRow extends React.Component {
	render () {
		let name = this.props.stocked ? 
			this.props.name :
			<span style={{color: 'red'}}>
				{this.props.name}
			</span> 
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.price}</td>
			</tr>
		)
	}
}

// function ProductTable (props) {
// 	let rows = [],
// 		lastCategory = null
// 	props.product.forEach((good, idx) => {
// 		if (good.category !== lastCategory) {
// 			rows.push(<ProductCategoryRow category={good.category} key={good.category}/>)
// 		}
// 		rows.push(<ProductRow stocked={good.stocked} name={good.name} price={good.price} key={good.name}/>)
// 		lastCategory = good.category;
// 	})
// 	return (
// 		<table>
// 			<thead>
// 				<tr>
// 					<th>Name</th>
// 					<th>Price</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				{rows}
// 			</tbody>
// 		</table>
// 	)
// }
class ProductTable extends React.Component {
	render () {
		let rows = [],
			lastCategory = null
		this.props.product.forEach((good, idx) => {
			if (good.name.indexOf(this.props.searchTxt) === -1 || (!good.stocked && this.props.onlyStock)) {
				return;
			}
			if (good.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={good.category} key={good.category}/>)
			}
			rows.push(<ProductRow stocked={good.stocked} name={good.name} price={good.price} key={good.name}/>)
			lastCategory = good.category;
			// if (this.props.searchTxt.length > 0) {
			// 	if (good.name.indexOf(this.props.searchTxt) > -1) {
			// 		if (good.category !== lastCategory) {
			// 			rows.push(<ProductCategoryRow category={good.category} key={good.category}/>)
			// 		}
			// 		rows.push(<ProductRow stocked={good.stocked} name={good.name} price={good.price} key={good.name}/>)
			// 		lastCategory = good.category;
			// 		return
			// 	}
			// } else {
			// 	if (good.category !== lastCategory) {
			// 		rows.push(<ProductCategoryRow category={good.category} key={good.category}/>)
			// 	}
			// 	if (this.props.onlyStock) {
			// 		good.stocked ? 
			// 			rows.push(<ProductRow stocked={good.stocked} name={good.name} price={good.price} key={good.name}/>) :
			// 			null
			// 	} else {
			// 		rows.push(<ProductRow stocked={good.stocked} name={good.name} price={good.price} key={good.name}/>)
			// 	}
			// 	lastCategory = good.category;
			// }
		})
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
	}
	handleTextChange (e) {
		this.props.setSearchTxt(e.target.value)
	}
	handleCheckBoxChange (e) {
		this.props.setOnlyStock(e.target.checked)
	}
	render() {
		return (
			<div>
				<input type="text" placeholder="Search..." onChange={this.handleTextChange} />
				<p>
					<input type="checkbox" onChange={this.handleCheckBoxChange}/>
					{' '}
					Only show products in stock
				</p>
			</div>
		);
	}
}

export default class ReactEx extends React.Component {
	constructor(props) {
		super(props);
		// 让我们来看看每一条，找出哪一个是 state。每个数据只要考虑三个问题：
		// 它是通过 props 从父级传来的吗？如果是，他可能不是 state。
		// 它随着时间推移不变吗？如果是，它可能不是 state。
		// 你能够根据组件中任何其他的 state 或 props 把它计算出来吗？如果是，它不是 state。

		// 对你应用的每一个 state：
		// 确定每一个需要这个 state 来渲染的组件。
		// 找到一个公共所有者组件(一个在层级上高于所有其他需要这个 state 的组件的组件)
		// 这个公共所有者组件或另一个层级更高的组件应该拥有这个 state。
		// 如果你没有找到可以拥有这个 state 的组件，创建一个仅用来保存状态的组件并把它加入比这个公共所有者组件层级更高的地方。
		this.state = {
			searchTxt: '',
			onlyStock: false
		}
		this.setSearchTxt = this.setSearchTxt.bind(this)
		this.setOnlyStock = this.setOnlyStock.bind(this)
	}
	setSearchTxt (txt) {
		this.setState({
			searchTxt: txt
		})
	}
	setOnlyStock (check) {
		this.setState({
			onlyStock: check
		})
	}
	render() {
		return (
			<div>
				<SearchBar setSearchTxt={this.setSearchTxt} setOnlyStock={this.setOnlyStock}/>
				<ProductTable product={data} onlyStock={this.state.onlyStock} searchTxt={this.state.searchTxt}/>
			</div>
		);
	}
}
