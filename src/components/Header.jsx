import React from 'react';
import './Header.css';
const Header = () => {
	return (
		<div className="header-container">
			<div className="logo-container">
				<img
					src="https://hitconsultant.net/wp-content/uploads/2022/06/Medidata.jpg"
					className="logo"
					alt="Logo"
				/>
			</div>
			<div>
				<ul className="nav-items">
					<li style={{ paddingRight: '8px' }}>
						<h3>Home</h3>
					</li>
					<li style={{ paddingRight: '8px' }}>
						<h3>About Us</h3>
					</li>
					<li style={{ paddingRight: '8px' }}>
						<h3>Cart</h3>
					</li>
				</ul>
			</div>
		</div>
	);
};
export const CONSTANT_STRING = 'REACT TRAINING';

export default Header;
