import React, { useState } from "react";
import Input from "../Input";
import { submitNewURL } from "../api";
import { useHistory } from "react-router-dom";

const WebscrapePage = ({ allCookies = {} }) => {
	let history = useHistory();
	const token = allCookies.sessionToken ? allCookies.sessionToken.token : null;
	const [URL, setURL] = useState({
		URL: ""
	});

	const handleChange = event => {
		const { name, value } = event.target;
		setURL({ ...URL, [name]: value });
	};

	const submitURL = async () => {
		try {
			await submitNewURL(URL, token);
			history.pushState("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			onSubmit={ev => {
				ev.preventDefault();
				submitURL();
			}}
		>
			<Input
				label="URL:"
				type="text"
				name="URL"
				value={URL.URL}
				onChange={handleChange}
			/>
			<Input type="submit" value="Submit" />
		</form>
	);
};

export default WebscrapePage;