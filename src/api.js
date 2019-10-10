import axios from "axios";

export const getConferenceList = async () => {
  try {
    const response = await axios.get("../conferenceDataMock.json");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
