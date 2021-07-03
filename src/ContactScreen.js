import React from 'react';
import './ContactScreen.css';

class ContactScreen extends React.Component {
	render() {
		return (
			<div id="contact">
				<a href="https://www.fiverr.com/ss131099">
					<img src="images/fiverr-logo.webp" alt="fiverr" />
					<div>Fiverr</div>
				</a>
				<a href="https://www.instagram.com/salman_not_khan">
					<img src="images/instagram-logo.webp" alt="instagram" />
					<div>Instagram</div>
				</a>
				<a href="https://www.twitter.com/salman_not_khan">
					<img src="images/twitter-logo.webp" alt="twitter" />
					<div>Twitter</div>
				</a>
				<a href="mailto:tony903212@gmail.com">
					<img src="images/mail-logo.webp" alt="email" />
					<div>Mail</div>
				</a>
				<a href="https://t.me/salmannotkhan">
					<img src="images/telegram-logo.webp" alt="telegram" />
					<div>Telegram</div>
				</a>
			</div>
		);
	}
}

export default ContactScreen;
