import React from 'react';
import './NavBar.css';
import NavBtn from './NavBtn';

class NavBar extends React.Component {
	timeout = '';
	darkText = React.createRef();
	state = { darkMode: false };

	darkMode() {
		this.setState({ darkMode: !this.state.darkMode });
		document.body.classList.toggle('dark');
		console.log(this.darkText.current.style);
		if (this.state.darkMode) {
			this.darkText.current.style.webkitAnimationPlayState = 'paused';
		}
		console.log(this.darkText.current.style);
	}

	componentDidMount() {
		if (this.state.darkMode) {
			this.darkText.current.style.webkitAnimationPlayState = 'paused';
		}
	}

	render() {
		return (
			<nav>
				<div id="button" onClick={() => this.darkMode()}>
					<img
						src={
							this.state.darkMode
								? 'images/sun-icon.webp'
								: 'images/moon-icon.webp'
						}
						alt="darkmode"
					/>
					<div ref={this.darkText}>
						{new Date().getHours() < 6 || new Date().getHours() > 18
							? 'Save your eyes'
							: 'Try dark theme'}
					</div>
				</div>
				<div className="links">
					<div className="active">&nbsp;</div>
					<NavBtn target="home" />
					<NavBtn target="projects" />
					<NavBtn target="about" />
					<NavBtn target="contact" />
				</div>
			</nav>
		);
	}
}

export default NavBar;
