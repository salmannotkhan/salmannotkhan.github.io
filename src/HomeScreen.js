import React from 'react';
import './HomeScreen.scss';

class HomeScreen extends React.Component {
	render() {
		return (
			<div id="home">
				<img src="images/profile.webp" alt="Salman Shaikh" />
				<h1>Hi, I'm Salman</h1>
				<p>And this is my site</p>
			</div>
		);
	}
}

export default HomeScreen;
