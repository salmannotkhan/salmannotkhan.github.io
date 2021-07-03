import React from 'react';
import './NavBar.css';
import NavBtn from './NavBtn';

class NavBar extends React.Component {
	timeout = '';
	darkText = React.createRef();
	state = { darkMode: false };

	darkMode() {}

	componentDidMount() {
		const darkMode = localStorage.getItem('darkMode') === 'true';
		this.setState({ darkMode }, () => {
			if (this.state.darkMode) {
				document.body.children[1].classList.toggle('dark');
				this.darkText.current.style.webkitAnimationPlayState = 'paused';
			}
		});
	}

	toggleTheme() {
		this.setState({ darkMode: !this.state.darkMode }, () => {
			localStorage.setItem('darkMode', this.state.darkMode);
			if (this.state.darkMode) {
				this.darkText.current.style.webkitAnimationPlayState = 'paused';
			}
		});
		document.body.children[1].classList.toggle('dark');
	}

	render() {
		return (
			<nav>
				<div id="button" onClick={() => this.toggleTheme()}>
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
