import React from "react";
import Input from "../Input";
import { StyledForm, StyledCard, StyledCardHeading } from "../StyledFormComponents";

const UpdateProfile = ({ user}) => {

    const { firstName, lastName, occupation } = user || {};
    
    return (
        <StyledForm>
            <StyledCard>
                <StyledCardHeading>Edit Profile:</StyledCardHeading>
                    <Input
                        label="First Name:"
                        type="text"
                        name="firstName"
                        value={firstName}
                        required
                    />
                    <Input
                        label="Last Name:"
                        type="text"
                        name="lastName"
                        value={lastName}
                        required
                    />
                    <Input
                        label="Occupation:"
                        type="text"
                        name="occupation"
                        value={occupation}
                        required
                    />
                    <Input type="submit" value="save" />
                    <Input type="button" value="cancel" />
            </StyledCard>
        </StyledForm>
    );
};

export default UpdateProfile;