import axios from "axios";

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
      `http://localhost:8080/conferences`,
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
    return response.status;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
