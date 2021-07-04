import React from 'react';
import Project from './Project';
import './ProjectsScreen.scss';

class ProjectsScreen extends React.Component {
	state = {
		projects: [],
	};

	fixCase = (x) => {
		x = x.replace(/[_-]/, ' ');
		if (x.indexOf(' ') === -1) {
			return x;
		}
		x = x.toLowerCase().split(' ');
		for (let i = 0; i < x.length; i++) {
			x[i] = x[i][0].toUpperCase() + x[i].slice(1);
		}
		return x.join(' ');
	};
	async componentDidMount() {
		const url = 'https://api.github.com/users/salmannotkhan/starred';
		const response = await fetch(url);
		const projects = await response.json();
		this.setState({ projects });
	}
	render() {
		return (
			<div id="projects">
				<div className="lang-logos">
					<div className="img">
						<img src="images/python-logo.webp" alt="python" />
						<img src="images/django-logo.webp" alt="django" />
						<img src="images/php-logo.webp" alt="php" />
					</div>
				</div>
				<div className="project-list">
					{this.state.projects.map((project) =>
						project.owner.login === 'salmannotkhan' ? (
							<Project
								key={project.id}
								title={this.fixCase(project.name)}
								desc={project.description}
								lang={project.language}
								githubUrl={project.html_url}
								url={project.homepage}
							/>
						) : null
					)}
				</div>
			</div>
		);
	}
}

export default ProjectsScreen;
