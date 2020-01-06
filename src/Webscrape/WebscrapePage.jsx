import React, { useState } from "react";
import Input from "../Input";
import { submitNewURL } from "../api";
import { withCookies } from "react-cookie";
import { toast } from "react-toastify";

export const WebscrapePage = ({ allCookies = {} }) => {
	const token = allCookies.sessionToken ? allCookies.sessionToken.token : null;
	const [URL, setURL] = useState("");

	const handleChange = event => {
		setURL(event.target.value);
	};

	const submitURL = async () => {
		if (URL === "") {
			toast.error("Please enter a URL");
		} else {
			try {
				await submitNewURL(URL, token);
				// add setConference function with details from web scrape
			} catch (error) {
				console.log(error);
			}
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
