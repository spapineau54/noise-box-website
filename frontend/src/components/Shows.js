import React from "react";
import Show from "./Show";
import { useEffect, useState } from "react";
import { createClient } from "contentful";

const Shows = () => {
	const [shows, setShows] = useState();

	useEffect(() => {
		const client = createClient({
			space: "ys7fgk4h22iy",
			accessToken: "sLcBzLqKl_XwKU_NSzOp9qFLMuASWabnJRnT944iEh8",
		});

		client
			.getEntries()
			.then((res) => setShows(res.items))
			.catch(console.error);
		console.log(shows);
	}, [shows]);

	return (
		<div className='grid grid-cols-2 md:grid-cols-3'>
			{shows.map((show) => (
				<Show show={show.fields} />
			))}
		</div>
	);
};

export default Shows;
