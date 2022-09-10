import React from "react";

const Navbar = () => {
	return (
		<header>
			<nav className='flex text-lg flex-row justify-between items-center py-5 mx-auto '>
				<div></div>

				<ul className='flex flex-row justify-between items-center '>
					<li className='px-3 hover:text-2xl'>Home</li>
					<li className='px-3 hover:text-2xl'>Venue</li>
					<li className='px-3 hover:text-2xl'>Shows</li>
					<li className='px-3 hover:text-2xl'>Contact</li>
					<li className='px-3 hover:text-2xl'>Shop</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
