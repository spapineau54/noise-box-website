import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = ({ logo }) => {
	return (
		<header>
			<nav className='flex text-lg flex-row justify-between items-center p-5 mx-3'>
				<div
					style={{ borderRadius: "100px" }}
					className=' w-32 my-10 lg:w-40 logo'>
					<img style={{ borderRadius: "100px" }} src={logo} />
				</div>

				<ul className='hidden md:flex flex-row justify-between items-center '>
					<li className='px-3 hover:text-2xl'>Home</li>
					<li className='px-3 hover:text-2xl'>Venue</li>
					<li className='px-3 hover:text-2xl'>Shows</li>
					<li className='px-3 hover:text-2xl'>Contact</li>
					<li className='px-3 hover:text-2xl'>Shop</li>
				</ul>
				<MobileMenu />
			</nav>
		</header>
	);
};

export default Navbar;
