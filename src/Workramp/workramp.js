import React, { useState } from "react";

const MAX_SCALE = 5;

export default function Quiz() {
	const [showAddQuestion, setShowAddQuestion] = useState(false);
	const [data, setData] = useState([
		{
			id: "1",
			questionText: "This is an example yes or no question.",
			points: 5,
			type: "Yes/No",
		},
		{
			id: "2",
			questionText: "Here's another yes or no question.",
			points: 15,
			type: "Yes/No",
		},
		{
			id: "3",
			questionText: "This is an example scale question.",
			points: 10,
			type: "Scale",
		},
		{
			id: "4",
			questionText: "Here's another scale question.",
			points: 5,
			type: "Scale",
		},
		{
			id: "5",
			questionText: "This is an example open-ended question.",
			type: "Open-Ended",
		},
	]);

	const [newQuestion, setNewQuestion] = useState({
		id: data.length + 1,
		questionText: "",
		points: 0,
		type: "",
	});

	// console.log("What is DATA? ", data);

	function handleAddQuestionClick(type) {
		// let text = {
		// 	"Yes/No": "This is an example yes or no question.",
		// 	"Scale": "Here's another scale question.",
		// 	"Open-Ended": "This is an example open-ended question.",
		// };
		// setData([
		// 	...data,
		// 	{
		// 		id: data.length + 1,
		// 		questionText: text[type],
		// 		type: type,
		// 	},
		// ]);
	}

	return (
		<main>
			{data.length && data.map((item) => <Question key={item.id} {...item} />)}
			<button onClick={() => handleAddQuestionClick()}>Add boolean question</button>
		</main>
	);
}

// function Question([id, questionText, points, type]) {
function Question(props) {
	return (
		<section>
			<div className="question-header">
				<span>{props.questionText}</span>
				{props.points !== undefined && <Points value={props.points} />}
			</div>
			<div className="question-inputs">
				<QuestionInputs type={props.type}></QuestionInputs>
			</div>
		</section>
	);
}

function Points({ value }) {
	// add pencil icon
	return (
		<div>
			{value} <i class="fa-solid fa-pen"></i>
		</div>
	);
}

function QuestionInputs({ type }) {
	let types = {
		"Yes/No": <BooleanInput />,
		"Scale": <ScaleInput />,
		"Open-Ended": <TextInput />,
	};

	return types[type];
}

function BooleanInput() {
	return (
		<div>
			<button>Yes</button>
			<button>No</button>
		</div>
	);
}

function ScaleInput() {
	return (
		<div>
			<button>1</button>
			<button>2</button>
			<button>3</button>
			<button>4</button>
			<button>5</button>
		</div>
	);
}

function TextInput() {
	return (
		<div>
			<textarea></textarea>
		</div>
	);
}
