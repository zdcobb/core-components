import React, { useState } from "react";
import "./counter.css";

export default function Counter(props) {
	let [count, setCount] = useState(0);

	return (
		<div>
			<h1>Counter component</h1>
			<p>A simple one in state demonstration. Click on the button to increment the "Count" number.</p>

			<div className="counter">
				<label className="counter__label">Counter: {count}</label>
				<div className="counter__button-row">
					<button className="counter__button" onClick={() => setCount(count + 1)}>
						Increment
					</button>
					<button className="counter__button" onClick={() => setCount(count - 1)}>
						Decrement
					</button>
					<button className="counter__button" onClick={() => setCount(0)}>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}
