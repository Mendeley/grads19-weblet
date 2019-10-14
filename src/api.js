import axios from "axios";

export const getConferenceList = async () => {
  try {
    const response = await axios.get("localhost:8080/conferences");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
