import React from 'react';

class HomeScreen extends React.Component {
	render() {
		return (
			<div id="home">
				<img
					style={{
						height: '150px',
						marginBottom: '20px',
						borderRadius: '50%',
					}}
					src="images/profile.webp"
					alt="Salman Shaikh"
				/>
				<h1>Hi, I'm Salman</h1>
				<p>And this is my site</p>
			</div>
		);
	}
}

export default HomeScreen;
