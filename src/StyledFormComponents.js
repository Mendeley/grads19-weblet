import styled from "styled-components";

const StyledForm = styled.div`
  width: 80%;
  height: 0%;
  margin: 25px;
  display: inline-block;
  border-radius: 25px;
  position: relative;
  display: flex-center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 50px;
`;

const StyledCardHeading = styled.h3`
  background: #dbd8db;
  width: 100%;
  height: 5%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
`;

const StyledCardText = styled.h3`
  background: #dbd8db;
  width: 100%;
  height: 25px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
`;

const StyledCard = styled.div`
  width: ${({ profileCard }) => (profileCard ? `80%` : `100%`)};
  height: ${({ profileCard }) => (profileCard ? `0%` : `100%`)};
  margin: ${({ profileCard }) => (profileCard ? `10px` : `0 auto`)};
  display: ${({ profileCard }) => (profileCard && `inline-block`)};
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #dbd8db;
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
`;

export { StyledCardHeading, StyledCardText, StyledForm, StyledCard };
