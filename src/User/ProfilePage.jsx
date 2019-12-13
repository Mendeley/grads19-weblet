import { StyledCardHeading, Card } from "../StyledFormComponents";
import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import { Link } from "react-router-dom";
import FavouriteConferenceList from "../Conference/FavouriteConferenceList";

export const StyledLink = styled(Link)`
  display: block;
  height: 40px;
  width: 100px;
  text-decoration: none;
  background-color: papayawhip;
  line-height: 40px;
  border-radius: 11px;
  border: 3px solid black;
  position: absolute;
  top: 18px;
  right: 18px;
`;

const StyledProfile = styled.div`
  height: 400px;
  padding: 20px;
`;

const StyledProfileCard = styled.ul`
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #dbd8db;
  width: 45%;
  height: 80vh;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
  margin: 10px;
  display: inline-block;
`;
=======
import { StyledCardHeading, Card } from "../StyledFormComponents";
import FavouriteConferenceList from "../Conference/FavouriteConferenceList";

// const StyledProfileCard = styled.ul`
//   border-style: solid;
//   border-color: black;
//   border-radius: 25px;
//   background: #dbd8db;
//   width: 45%;
//   height: 80vh;
//   transition: 0.3s;
//   :hover {
//     box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
//   }
//   vertical-align: middle;
//   margin: 10px;
//   display: inline-block;
// `;
>>>>>>> 20f73c37538327db1122e69d0465e597dcca719a

const ProfilePage = ({ user, isLoading, error, favouriteConferences }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const { id, username, firstName, lastName, email, occupation } = user || {};

  return (
<<<<<<< HEAD
    <StyledProfile>
      <StyledLink className="editLink" to={`/users/${id}/edit`}>
        Edit
      </StyledLink>

      <StyledProfileCard>
        <Card>
          <StyledCardHeading className="name">
            {`Hello, ${firstName} ${lastName}!`}
          </StyledCardHeading>
          <p className="username">Username: {username}</p>
          <p className="email">Email: {email}</p>
          <p className="occupation">Occupation: {occupation}</p>
        </Card>
        <Card>
          <StyledCardHeading className="favourite-conferences">
            Favourited conferences
          </StyledCardHeading>
        </Card>

        <FavouriteConferenceList favouriteConferences={favouriteConferences} />
      </StyledProfileCard>
    </StyledProfile>
=======
    <>
      <Card>
        <StyledCardHeading className="name">
          Hello {firstName} {lastName}
        </StyledCardHeading>
        <p className="username">Username: {username}</p>
        <p className="email">Email: {email}</p>
        <p className="occupation">Occupation: {occupation}</p>
      </Card>
      <Card>
        <StyledCardHeading className="favourite-conferences">
          Favourited conferences
        </StyledCardHeading>
        <FavouriteConferenceList favouriteConferences={favouriteConferences} />
      </Card>
    </>
>>>>>>> 20f73c37538327db1122e69d0465e597dcca719a
  );
};

export default ProfilePage;
