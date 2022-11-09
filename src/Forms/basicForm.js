import React, { useState } from "react";

export default function BasicForm() {
	let [fname, setFName] = useState("");
	let [lname, setLName] = useState("");
	let [email, setEmail] = useState("");
	let [message, setMessage] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log("Form submitted!");
	}
	return (
		<main>
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<label className="input-group__label" htmlFor="fname-input">
						First Name
					</label>
					<input
						type="text"
						id="fname-input"
						className="input-group__input"
						value={fname}
						onChange={(e) => setFName(e.target.value)}
					></input>
				</div>
				<div className="input-group">
					<label className="input-group__label" htmlFor="lname-input">
						Last Name
					</label>
					<input
						type="text"
						id="lname-input"
						className="input-group__input"
						value={lname}
						onChange={(e) => setLName(e.target.value)}
					></input>
				</div>
				<div className="input-group">
					<label className="input-group__label" htmlFor="email-input">
						Email
					</label>
					<input
						type="email"
						id="email-input"
						className="input-group__input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div className="input-group">
					<label className="input-group__label" htmlFor="message-input">
						Message
					</label>
					<textarea
						type="text"
						id="message-input"
						className="input-group__input"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>

				<input type="submit" value="Submit Form" onClick={handleSubmit} />
			</form>
		</main>
	);
}
