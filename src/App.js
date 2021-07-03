import './App.css';
import NavBar from './NavBar';
import HomeScreen from './HomeScreen';

import ProjectsScreen from './ProjectsScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import React from 'react';

class App extends React.Component {
	componentDidMount() {
		document.querySelector('#home').scrollIntoView();
	}
	render() {
		return (
			<>
				<NavBar />
				<div id="screens">
					<HomeScreen />
					<ProjectsScreen />
					<AboutScreen />
					<ContactScreen />
				</div>
			</>
		);
	}
}

export default App;
