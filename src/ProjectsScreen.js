import React from 'react';
import './ProjectsScreen.css';

class ProjectsScreen extends React.Component {
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
				<div className="project-list">&nbsp;</div>
			</div>
		);
	}
}

export default ProjectsScreen;
