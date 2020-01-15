import styled from "styled-components";

const StyledForm = styled.div`
  width: 80%;
  height: 100%;
  margin: 25px;
  display: inline-block;
  border-radius: 25px;
  position: relative;
  display: flex-center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 50px;
  font-size: 25px;
`;

const StyledCardHeading = styled.h3`
  background: white;
  width: 100%;
  height: 5%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    background: white;
    width: 100%;
    height: 5%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
  }
`;

const StyledCardText = styled.h3`
  background: white;
  width: 100%;
  height: 25px;
  font-size: 20px;
  font-weight: bold;
`;

const StyledCard = styled.div`
  width: ${({ profileCard }) => (profileCard ? `70%` : `85%`)};
  height: ${({ profileCard }) => (profileCard ? `0%` : `100%`)};
  margin: ${({ profileCard }) => (profileCard ? `10px` : `0 auto`)};
  display: ${({ profileCard }) => profileCard && `inline-block`};
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #ffffff;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
  position: relative;
  display: flex-center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 50px;
  padding-left: 60px;
  padding-right: 60px;

  @media only screen and (max-width: 600px) {
    width: ${({ profileCard }) => (profileCard ? `70%` : `100%`)};
    height: ${({ profileCard }) => (profileCard ? `0%` : `100%`)};
    margin: ${({ profileCard }) => (profileCard ? `10px` : `0`)};
    display: ${({ profileCard }) => profileCard && `inline-block`};
    border-style: solid;
    border-color: black;
    border-radius: 25px;
    background: #ffffff;
    padding: 0;
    padding-bottom: 50px;
  }
`;

const StyledCancelSubmit = styled.input`
  border-style: solid;
  border-radius: 11px;
  background-color: #1f73b2;
  color: white;
  padding: 8px 24px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  margin: 6px 4px;
  position: absolute;
  bottom: 8%;
  right: 10%;

  @media only screen and (max-width: 1100px) {
    border-style: solid;
    border-radius: 11px;
    background-color: #1f73b2;
    color: white;
    padding: 8px 24px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin: 6px 4px;
    position: absolute;
    bottom: 2%;
    left: 7%;
  }
`;
const StyledSaveSubmit = styled.input`
  border-style: solid;
  background-color: #1f73b2;
  border-radius: 11px;
  color: white;
  padding: 8px 24px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  margin: 6px 4px;
  position: absolute;
  bottom: 8%;
  right: 20%;

  @media only screen and (max-width: 1100px) {
    border-style: solid;
    background-color: #1f73b2;
    border-radius: 11px;
    color: white;
    padding: 8px 24px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin: 6px 4px;
    position: absolute;
    bottom: 2%;
    right: 7%;
  }
`;
const StyledSubmit = styled.input`
  border-style: solid;
  background-color: #1f73b2;
  border-radius: 11px;
  color: white;
  padding: 8px 24px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  margin: auto;
  display: flex;
  justify-content: center;
  width: 110px;

  @media only screen and (min-width: 600px) and (max-width: 1100px) {
    display: block;
    text-decoration: none;
    background-color: #1f73b2;
    color: white;
    border-radius: 11px;
    padding: 8px 24px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin: 6px 4px;
    margin: auto;
    display: flex;
    justify-content: center;
    width: 90px;
  }

  @media only screen and (max-width: 600px) {
    display: block;
    text-decoration: none;
    background-color: #1f73b2;
    color: white;
    border-radius: 11px;
    padding: 8px 24px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin: 6px 4px;
    margin: auto;
    display: flex;
    justify-content: center;
    width: 85px;
  }
`;

const StyledAddForm = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledSearchForm = styled.div`
  display: inline-grid;
  justify-items: center;
`;

export {
  StyledCardHeading,
  StyledCardText,
  StyledForm,
  StyledCard,
  StyledCancelSubmit,
  StyledSaveSubmit,
  StyledSubmit,
  StyledAddForm,
  StyledSearchForm
};
