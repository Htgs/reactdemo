import React from 'react';
export default function HotWater (props) {
	return (
			<div>
				{
					props.temperature >= 100 ? (
						<h1>水烧开了</h1>
						) : (
						<h1>水没开</h1>
						)
				}
			</div>
		)
}
