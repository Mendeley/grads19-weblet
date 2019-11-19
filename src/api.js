import axios from "axios";
import { toast } from "react-toastify";

export const getConferenceList = async () => {
  try {
    const response = await axios.get("http://localhost:8080/conferences");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getConferenceById = async id => {
  try {
    const response = await axios.get(`http://localhost:8080/conferences/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createNewConference = async conference => {
  try {
    const response = await axios.post(
      "http://localhost:8080/conferences",
      conference
    );
    return response.status;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteConferenceById = async id => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/conferences/${id}`
    );
    toast.success("Conference successfully deleted!");
    return response.status;
  } catch (error) {
    toast.error("Conference not deleted!");
    console.log(error);
    throw error;
  }
};

export const updateConferenceById = async (id, conference) => {
  try {
    const response = await axios.patch(
      `http://localhost:8080/conferences/${id}`,
      conference
    );
    toast.success("Conference details have been updated!");
    return response.status;
  } catch (error) {
    toast.error("Conference details have not been updated!");
    console.log(error);
    throw error;
  }
};
export const createNewUser = async user => {
  try {
    const response = await axios.post("http://localhost:8080/users", user);
    toast.success("User successfully registered!");
    return response.status;
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
