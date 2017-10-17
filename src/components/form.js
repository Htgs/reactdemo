import React, { Component } from 'react'

class TheForm extends Component {
	render () {
		return (
			<form>
				<label htmlFor='name'>
					Name:
					<input type='text' id='name' name='name' />
				</label>
				<input type='submit' value='提交' />
			</form>
			)
	}
}

export default TheForm;
