import React, { Component } from 'react'
// import UserGreeting from 'userGreeting.js'
// import GuestGreeting from 'guestGreeting.js'

function UserGreeting (props) {
	return <h1>Welcome</h1>
}

function GuestGreeting (props) {
	return <h1>Please sign up</h1>
}

export default function Greeting (props) {
	const isLoggedIn = props.isLoggedIn
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}
