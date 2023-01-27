import React from 'react';
import './index.scss';

const Navbar = ({ genderCount }) => {
	return (
		<nav className='nav-bar'>
			<h1 className='header'>
				Secqur<span>ai</span>se
			</h1>

			<ul className='gender-count'>
				<li className='male-count'>{genderCount.male}</li>
				<li className='female-count'>{genderCount.female}</li>
			</ul>
		</nav>
	);
};

export default Navbar;
