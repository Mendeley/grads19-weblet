import React from 'react';
import Form from "../Form"
import styled from "styled-components";

const StyledConferenceForm = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px;
`;

const StyledCardHeading = styled.h3`
  background: #dbd8db;
  width: 100%;
  height: 55px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
`;


const StyledCard = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #dbd8db;
  width: 65%;
  height: 370px;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
  margin: 0 auto;
`;




const AddConference = () => {
    return (
        <StyledConferenceForm>
            <StyledCard>
                <StyledCardHeading>CREATE A NEW CONFERENCE!!!</StyledCardHeading>
                <Form />
            </StyledCard>
        </StyledConferenceForm >
    )
}

export default AddConference;