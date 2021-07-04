import React from 'react';
import './Project.scss';

class Project extends React.Component {
	state = {
		clicked: '',
	};

	handleRipple = (e, btn) => {
		this.setState({ clicked: btn }, () => {
			e.target.previousSibling.style.top = e.nativeEvent.layerY + 'px';
			e.target.previousSibling.style.left = e.nativeEvent.layerX + 'px';
		});
		setTimeout(() => {
			this.setState({ clicked: '' });
		}, 1500);
	};
	render() {
		return (
			<div className="project">
				<div className="details">
					<div className="title">{this.props.title}</div>
					<div className="description">{this.props.desc}</div>
					<div className="lang">Written in: {this.props.lang}</div>
				</div>
				<div className="links">
					<div className="link" onClick={(e) => this.handleRipple(e, 'github')}>
						{this.state.clicked === 'github' ? (
							<div className="ripple"> </div>
						) : null}
						<a href={this.props.githubUrl}>Github Link</a>
					</div>
					{this.props.url ? (
						<div className="link" onClick={(e) => this.handleRipple(e, 'url')}>
							{this.state.clicked === 'url' ? (
								<div className="ripple"> </div>
							) : null}
							<a href={this.props.url}>Visit Site</a>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default Project;
