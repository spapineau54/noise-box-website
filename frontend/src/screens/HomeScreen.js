import React from "react";
import Button from "../components/Button";
import Shows from "../components/Shows";

const HomeScreen = ({ hero, shows }) => {
	return (
		<>
			<div>
				<img src={hero} height={100} mode='fit' />
			</div>
			<Shows shows={shows} />
			<h1></h1>
		</>
	);
};

export default HomeScreen;
