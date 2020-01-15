import React, { useState, Fragment } from "react";
import Input from "../Input";
import { submitNewURL } from "../api";
import { withCookies } from "react-cookie";
import { toast } from "react-toastify";
import Loader from "./WebscrapeLoadingSpinner";
import { StyledSubmit, StyledAddForm } from "../StyledFormComponents";

export const WebscrapePage = ({ allCookies = {} , setConference}) => {
	const token = allCookies.sessionToken ? allCookies.sessionToken.token : null;
	const [URL, setURL] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	 
	const handleChange = event => {
		setURL(event.target.value);
	};

	const submitURL = async () => {
		if (!URL) {
			toast.error("Please enter a URL");
		} else {
			setIsLoading(true);			
			try {
				const scrapedConference = await submitNewURL(URL, token);
				const newConference = {
					name: scrapedConference.scrapedConferenceTitle,
					dateTime: scrapedConference.scrapedDateTime.replace(':00Z', ''),
					city: scrapedConference.scrapedCity,
					description: scrapedConference.scrapedDescription,
					topic: scrapedConference.scrapedTopic
				} 
				setConference(newConference);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
		}
	};

	return (
		<form
				onSubmit={ev => {
						ev.preventDefault();
						submitURL();
				}}
		>
			{isLoading ? (<Loader />) : (
				<>
           <StyledAddForm>
						<Input
								label="URL:"
								type="text"
								name="URL"
								value={URL}
								onChange={handleChange}
						/> 
             </StyledAddForm>
						<StyledSubmit type="submit" value="Submit URL" />    </>)}

		</form>
);
};

export default withCookies(WebscrapePage);