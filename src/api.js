import axios from "axios";
import { toast } from "react-toastify";

export const getConferenceList = async () => {
  const response = await axios.get("http://localhost:8080/conferences");
  return response.data;
};

export const getConferenceById = async id => {
  const response = await axios.get(`http://localhost:8080/conferences/${id}`);
  return response.data;
};

export const createNewConference = async conference => {
  await axios.post("http://localhost:8080/conferences", conference);
};

export const deleteConferenceById = async id => {
  try {
    await axios.delete(`http://localhost:8080/conferences/${id}`);
    toast.success("Conference successfully deleted!");
  } catch (error) {
    toast.error("Conference not deleted!");
    console.log(error);
    throw error;
  }
};

export const updateConferenceById = async (id, conference) => {
  try {
    await axios.patch(`http://localhost:8080/conferences/${id}`, conference);
    toast.success("Conference details have been updated!");
  } catch (error) {
    toast.error("Conference details have not been updated!");
    console.log(error);
    throw error;
  }
};

export const createNewUser = async user => {
  try {
    await axios.post("http://localhost:8080/users", user);
    toast.success("User successfully registered!");
  } catch (error) {
    toast.error("User registration failed!");
    console.log(error);
    throw error;
  }
};

export const loginUser = async user => {
  try {
    const response = await axios.post("http://localhost:8080/auth/login", user);
    toast.success("Login successful!");
    return response.data;
  } catch (error) {
    toast.error("Login failed!");
    console.log(error);
    throw error;
  }
};

export const getUserById = async (id, token) => {
  const response = await axios.get(`http://localhost:8080/users/${id}`, {
    headers: { Authorization: token }
  });
  console.log(response)
  return response.data;
};

export const logoutUser = async token => {
  try {
    await axios.delete("http://localhost:8080/auth/logout", {
      headers: { Authorization: token }
    });
    toast.success("Logout successful!");
  } catch (error) {
    toast.error("Logout failed!");
    console.log(error);
    throw error;
  }
};

export const updateUserById = async (id, user, token) => {
  try {
    await axios.patch(
      `http://localhost:8080/users/${id}`, 
      user,
      { headers: { Authorization: token}}
      );
  toast.success("Profile details have been updated!");
  } catch (error) {
  toast.error("Profile details have not been updated!");
  throw error;
  }
  };