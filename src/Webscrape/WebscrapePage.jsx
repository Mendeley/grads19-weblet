import React, { useState } from "react";
import Input from "../Input";
import { submitNewURL } from "../api";
import { useHistory } from "react-router-dom";
import { withCookies } from "react-cookie";
import { toast } from "react-toastify";

const WebscrapePage = ({ allCookies = {} }) => {
	let history = useHistory();
	const token = allCookies.sessionToken ? allCookies.sessionToken.token : null;
	const [URL, setURL] = useState("");

	const handleChange = event => {
		setURL(event.target.value);
	};

	const submitURL = async () => {
		const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		if (URL === "") {
			toast.error("Please enter a URL");
		} else if (regexp.test(URL)) {
			try {
				await submitNewURL(URL, token);
				history.push("/add");
			} catch (error) {
				console.log(error);
			}
		} else {
			toast.info("URL not valid");
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
				value={URL}
				onChange={handleChange}
			/>
			<Input type="submit" value="Submit" />
		</form>
	);
};

export default withCookies(WebscrapePage);
