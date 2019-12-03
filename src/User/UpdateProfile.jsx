import React from "react";
import Input from "../Input";
import { useHistory } from "react-router-dom";
import { StyledForm, StyledCard, StyledCardHeading } from "../StyledFormComponents";
import { updateUserById } from "../api";

const UpdateProfile = ({
    setUpdatedUser,
    updatedUser,
    setUser,
    id,
    isLoading,
    error,
    sessionToken
}) => {
    
    const history = useHistory();

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>An error has occurred...</p>;
      }
  
    const handleChange = event => {
        const { name, value } = event.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    }
    
    const submitForm = async () => {
        try {
          await updateUserById(id, updatedUser, sessionToken.token);
          setUser(updatedUser);
          history.push(`/users/${id}`);
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <StyledForm>
            <StyledCard>
                <StyledCardHeading>Edit Profile:</StyledCardHeading>
                <form
                    onSubmit={ev => { ev.preventDefault();
                        submitForm();
                    }}
                >
                    <Input
                        label="First Name:"
                        type="text"
                        name="firstName"
                        value={updatedUser.firstName}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Last Name:"
                        type="text"
                        name="lastName"
                        value={updatedUser.lastName}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Occupation:"
                        type="text"
                       name="occupation"
                        value={updatedUser.occupation}
                        onChange={handleChange}
                        required
                    />
                    <Input type="submit" value="Save" />
                </form>
            </StyledCard>
        </StyledForm>
    );
};

export default UpdateProfile;