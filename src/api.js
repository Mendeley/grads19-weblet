import axios from "axios";
import { toast } from "react-toastify";

const spring_url = "http://confound.test.corp.mendeley.com/api";
// const spring_url = "http://localhost/api";

export const getConferenceList = async () => {
  const response = await axios.get(`${spring_url}/conferences`);
  return response.data;
};

export const getConferenceById = async id => {
  const response = await axios.get(`${spring_url}/conferences/${id}`);
  return response.data;
};

export const createNewConference = async (conference, token) => {
  await axios.post("${spring_url}/conferences", conference, {
    headers: { Authorization: token }
  });
};

export const deleteConferenceById = async (id, token) => {
  try {
    await axios.delete(`${spring_url}/conferences/${id}`, {
      headers: { Authorization: token }
    });
    toast.success("Conference successfully deleted!");
  } catch (error) {
    toast.error("Conference not deleted!");
    throw error;
  }
};

export const updateConferenceById = async (id, conference, token) => {
  try {
    await axios.patch(`${spring_url}/conferences/${id}`, conference, {
      headers: { Authorization: token }
    });
    toast.success("Conference details have been updated!");
  } catch (error) {
    toast.error("Conference details have not been updated!");
    throw error;
  }
};

export const createNewUser = async user => {
  try {
    await axios.post(`${spring_url}/users`, user);
    toast.success("User successfully registered!");
  } catch (error) {
    toast.error("User registration failed!");
    throw error;
  }
};

export const getSearchResults = async input => {
  const response = await axios.get(`${spring_url}/users/search?query=${input}`);
  return response.data;
};

export const loginUser = async user => {
  try {
    const response = await axios.post(`${spring_url}/auth/login`, user);
    toast.success("Login successful!");
    return response.data;
  } catch (error) {
    toast.error("Login failed!");
    throw error;
  }
};

export const getUserById = async (id, token) => {
  const response = await axios.get(`${spring_url}/users/${id}`, {
    headers: { Authorization: token }
  });
  return response.data;
};

export const logoutUser = async token => {
  try {
    await axios.delete(`${spring_url}/auth/logout`, {
      headers: { Authorization: token }
    });
    toast.success("Logout successful!");
  } catch (error) {
    toast.error("Logout failed!");
    throw error;
  }
};

export const updateUserById = async (id, user, token) => {
  try {
    await axios.patch(`${spring_url}/users/${id}`, user, {
      headers: { Authorization: token }
    });
    toast.success("Profile details have been updated!");
  } catch (error) {
    toast.error("Profile details have not been updated!");
    throw error;
  }
};

export const getEmployeeList = async (userId, token) => {
  const response = await axios.get(`${spring_url}/users?manager_id=${userId}`, {
    headers: { Authorization: token }
  });
  return response.data;
};

export const getFavouritedConferencesByUserId = async token => {
  const response = await axios.get(`${spring_url}/user-conferences`, {
    headers: { Authorization: token }
  });
  return response.data;
};

export const addFavouriteConference = async (userId, conferenceId, token) => {
  try {
    await axios.post(
      `${spring_url}/user-conferences`,
      { userId, conferenceId },
      {
        headers: { Authorization: token }
      }
    );
    toast.success("Conference has been favourited!");
  } catch (error) {
    toast.error("Conference has not been favourited!");
    throw error;
  }
};

export const removeFavouriteConference = async (conferenceId, token) => {
  try {
    await axios.delete(`${spring_url}/user-conferences/${conferenceId}`, {
      headers: { Authorization: token }
    });
    toast.info("Conference has been unfavourited!");
  } catch (error) {
    toast.error("Conference has not been unfavourited!");
    throw error;
  }
};

export const submitNewURL = async (URL, token) => {
  await axios.post(`${spring_url}/add`, URL, {
    headers: {
      Authorization: token,
      "content-type": "application/json"
    }
  });
};
