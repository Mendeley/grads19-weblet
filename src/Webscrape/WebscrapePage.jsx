import React from "react";
import {
	StyledCardHeading,
	StyledCard,
	StyledForm
} from "../StyledFormComponents";
import Input from "../Input";

const WebscrapePage = () => {
	return (
		<StyledForm>
			<StyledCard>
				<StyledCardHeading className="name">
					Enter conference URL:
				</StyledCardHeading>
				<form>
					<Input label="URL:" type="text" name="URL" />
					<Input type="submit" value="submit" />
				</form>
			</StyledCard>
		</StyledForm>
	);
};

export default WebscrapePage;