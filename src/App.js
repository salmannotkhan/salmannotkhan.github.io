import './App.scss';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';

import ProjectsScreen from './components/ProjectsScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';
import React from 'react';

class App extends React.Component {
	state = { darkMode: false };

	componentDidMount() {
		const darkMode = localStorage.getItem('darkMode') === 'true';
		document.querySelector('#home').scrollIntoView();
		this.setState({ darkMode });
	}

	toggleTheme() {
		this.setState({ darkMode: !this.state.darkMode }, () => {
			localStorage.setItem('darkMode', this.state.darkMode);
		});
	}

	render() {
		return (
			<div className={'App' + (this.state.darkMode ? ' dark' : '')}>
				<NavBar
					darkMode={this.state.darkMode}
					toggleTheme={() => this.toggleTheme()}
				/>
				<div id="screens">
					<HomeScreen />
					<ProjectsScreen />
					<AboutScreen />
					<ContactScreen />
				</div>
			</div>
		);
	}
}

export default App;
