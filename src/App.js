import React from "react";
import "./App.css";
import Counter from "./Counter/counter";
import BasicForm from "./Forms/basicForm";
import FetchingData from "./Fetching/fetchingData";
import Quiz from "./Workramp/workramp";

import { createBrowserRouter, Link, Route, RouterProvider, Outlet } from "react-router-dom";

const componentRouter = createBrowserRouter([
	{
		path: "/",
		element: (
			<main className="components-dashboard">
				<ul className="components-list">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="counter">
						<li>Counter</li>
					</Link>
					<Link to="basicForm">
						<li>Basic Form</li>
					</Link>
					<Link to="fetching">
						<li>Fetching Data</li>
					</Link>
					<Link to="workramp">
						<li>Work Ramp questions</li>
					</Link>
				</ul>
				<Outlet />
			</main>
		),
		children: [
			{
				path: "/",
				element: <div>Click a component in the list to load</div>,
			},
			{
				path: "counter",
				element: <Counter />,
			},
			{
				path: "basicForm",
				element: <BasicForm />,
			},
			{
				path: "fetching",
				element: <FetchingData></FetchingData>,
			},
			{
				path: "workramp",
				element: <Quiz></Quiz>,
			},
		],
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={componentRouter} />
		</div>
	);
}

export default App;
