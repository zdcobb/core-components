import React, { useEffect, useState } from "react";

export default function fetchingData() {
	let [initFetch, setInitFetch] = useState({});
	let [manualFetch, setManualFetch] = useState({});

	function handleFetchClick(e) {
		fetch("https://api.weather.gov/gridpoints/{office}/{grid X},{grid Y}/forecast")
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((json) => {
				console.log("JSON Response: ");
				console.log(json);
				setManualFetch(json);
			});
	}

	useEffect(() => {
		fetch("https://api.weather.gov")
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((json) => {
				console.log("JSON Response: ");
				console.log(json);
				setInitFetch(json);
			});
	}, []);
	return (
		<main>
			<h1>Fetching data!</h1>

			<section>
				<h2>Some data that's fetched upon page load!</h2>
				<p>{JSON.stringify(initFetch)}</p>
			</section>

			<section>
				<h2>Now let's manually fetch some data via user interaction! Use the button to fetch alerts for your state!</h2>
				<button onClick={handleFetchClick}>Get alerts</button>
				<p>{JSON.stringify(manualFetch)}</p>
			</section>
		</main>
	);
}
