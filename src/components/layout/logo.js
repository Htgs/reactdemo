import React from 'react';
import Lg from '../../logo.svg';
export default class Logo extends React.Component {
	render() {
		return (
			<div className='nav_logo pull-left'>
				<a href="#" className='block clearfix'>
					<img src={Lg} alt="logo"/>
					<h1 className='pull-right'>React</h1>
				</a>
			</div>
		);
	}
}