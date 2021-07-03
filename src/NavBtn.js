import React from 'react';
import './NavBtn.css';

class NavBtn extends React.Component {
	button = React.createRef();
	switchPage() {
		document.querySelector('.active').style.top =
			this.button.current.offsetTop + 'px';
		document.querySelector('#' + this.props.target).scrollIntoView();
	}
	render() {
		return (
			<button
				ref={this.button}
				data-target={this.props.target}
				onClick={() => this.switchPage()}
			>
				<img
					src={`images/${this.props.target}-icon.webp`}
					alt={this.props.target}
					height="20"
					width="20"
				/>
				<span>
					{this.props.target[0].toUpperCase() + this.props.target.slice(1)}
				</span>
			</button>
		);
	}
}

export default NavBtn;
