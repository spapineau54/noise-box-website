import React from "react";

const Button = ({ button, text }) => {
	return (
		<div style={{ borderRadius: "10px" }} className={button}>
			{text}
		</div>
	);
};

export default Button;
