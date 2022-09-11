import { React, useState } from "react";

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='md:hidden'>
			<div>
				<i
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					className='fa-solid fa-burger text-white text-4xl'></i>
			</div>
			{isOpen ? (
				<div>
					<ul>
						<li>Home</li>
						<li>Venue</li>
						<li>Shows</li>
						<li>Contact</li>
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default MobileMenu;
