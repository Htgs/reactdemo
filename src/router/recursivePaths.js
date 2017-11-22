import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const PEEPS = [
	{ id: 0, name: 'mi', fri: [1, 2, 3] },
	{ id: 1, name: 'se', fri: [0, 3] },
	{ id: 2, name: 'ki', fri: [0, 1, 3] },
	{ id: 3, name: 'da', fri: [1, 2] }
]

// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
const find = (id) => PEEPS.find((elm, idx, arr) => {
	// console.log(elm)
	// console.log(idx)
	// console.log(arr)
	return elm.id === id
})

const Recursive = () => (
	<Router>
		<Person match={{params: {id: 0}, url: ''}} />
	</Router>
)

const Person = ({ match }) => {
	let person = find(parseInt(match.params.id)) // 把路由的字符串转为数字类型，避免测试失败
	return (
		<div>
			<h3>{person.name} fri</h3>
			<ul>
				{person.fri.map(id => (
					<li key={id}>
						<Link to={`${match.url}/${id}`}>
							{find(id).name}
						</Link>
					</li>
				))}
			</ul>
			<Route path={`${match.url}/:id`} component={Person} />
		</div>
	)
}

export default Recursive
