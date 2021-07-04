import React from 'react';
import NavBtn from './NavBtn';
import '../styles/NavBar.scss';

class NavBar extends React.Component {
	render() {
		return (
			<nav>
				<div
					id="button"
					onClick={() => this.props.toggleTheme(this.props.darkMode)}
				>
					<img
						src={
							this.props.darkMode
								? 'images/sun-icon.webp'
								: 'images/moon-icon.webp'
						}
						alt="darkmode"
					/>
					<div>
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
