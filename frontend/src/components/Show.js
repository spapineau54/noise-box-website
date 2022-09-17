import React from "react";
import Card from "./Card";

const Show = ({ show }) => {
	return (
		<>
			<Card>
				<h1>{show.title}</h1>
				<h2></h2>
				<div></div>
			</Card>
		</>
	);
};

export default Show;
