import styled from "styled-components";

const StyledForm = styled.div`
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
  text-transform: uppercase;
`;

const StyledCard = styled.div`
  width: ${({ favouritesCard }) => (favouritesCard ? `45%` : `900px`)};
  height: ${({ favouritesCard }) => (favouritesCard ? `80vh` : `450px`)};
  margin: ${({ favouritesCard }) => (favouritesCard ? `10px` : `0 auto`)};
  display: ${({ favouritesCard }) => (favouritesCard ? `inline-block` : ``)};
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #dbd8db;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
  margin: 0 auto;
  position: relative;
`;

export { StyledCardHeading, StyledForm, StyledCard };
