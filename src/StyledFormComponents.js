import styled from "styled-components";

const StyledForm = styled.div`
  height: 400px;
  padding: 20px;
  display:flex; 
  flex-direction:row;
`;

const StyledCardHeading = styled.h3`
  background: #dbd8db;
  width: 100%;
  height: 55px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
`;

const StyledCardText = styled.h3`
  background: #dbd8db;
  width: 100%;
  height: 55px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
`;

const StyledCard = styled.div`
  width: ${({ profileCard }) => (profileCard ? `45%` : `900px`)};
  height: ${({ profileCard }) => (profileCard ? `180vh` : `600px`)};
  margin: ${({ profileCard }) => (profileCard ? `10px` : `0 auto`)};
  display: ${({ profileCard }) => profileCard && `inline-block`};
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
  display: inline-block;
`;

export { StyledCardHeading, StyledCardText, StyledForm, StyledCard };
