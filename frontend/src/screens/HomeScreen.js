import React from "react";
import Button from "../components/Button";
import { Parallax } from "react-parallax";
import Shows from "../components/Shows";

const HomeScreen = ({ hero }) => {
	return (
		<>
			<div>
				<h1 className='text-2xl text-center md:text-4xl'>
					Inform. Inspire. Empower.
				</h1>
				<div className='md:flex flex-row-reverse justify-between items-center'>
					<div className='my-5'>
						<img src={hero} />
					</div>
					<div className='flex flex-col justify-center items-center'>
						<p className='text-justify p-3 md:mx-5 text-xl'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
							provident suscipit assumenda sapiente repellendus reprehenderit
							culpa voluptatibus quis unde nemo. Quos placeat dolorem minima
							rerum sequi aliquid in officia quidem!
						</p>
						<Button
							text='Learn More'
							button={
								"hidden md:block bg-white text-black w-48 py-5 text-center"
							}
						/>
					</div>
				</div>
			</div>
			<Parallax blur={0} strength={0} bgImage='./images/hitw.jpeg'>
				<h1>Upcoming Shows.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
					deleniti, magnam possimus minima nisi delectus qui consequuntur sit
					sapiente illum aliquid odio vero eum cum? Error veniam modi ducimus
					qui!
				</p>
				<Shows />
			</Parallax>
		</>
	);
};

export default HomeScreen;
