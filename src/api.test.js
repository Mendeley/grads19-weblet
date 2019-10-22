import axios from "axios";
import { getConferenceList, getConferenceById } from "./api";

jest.mock("axios");

//test data for all confereces
describe("getConferenceList", () => {
  const mockData = {
    data: [
      {
        id: 1,
        name: "Festival of Marketing",
        dateTime: "2019-11-12T12:34:11Z",
        city: "London",
        description:
          "From Festivalofmarketing.com: The Festival of Marketing is a unique experience where ambitious marketers can discover, learn, celebrate and shape the future together. As the largest global event dedicated to brand marketers, the Festival reflects the very nature of ...",
        topic: "Marketing"
      },
      {
        id: 2,
        name: "Royal Parks Half Marathon 2019",
        dateTime: "2019-10-12T12:34:11Z",
        city: "Manchester",
        description:
          "From Meetingneeds.org.uk: HOW TO BECOME A CHARITY PARTNER AND WHAT’S IN IT FOR YOUR ORGANISATION? As a Charity Partner, you get to be a central part of the Events Industry charity and share in our growth story. Leveraging your engagement with Meeting Needs a",
        topic: "Sport"
      }
    ]
  };

  //test to return all conferences
  it("returns list of conferences", async () => {
    expect.assertions(1);

    axios.get.mockResolvedValue(mockData);

    const result = await getConferenceList();

    expect(result).toEqual(mockData.data);
  });
});

<<<<<<< HEAD
=======
//test data for getConferencesById
describe("getConferenceById", () => {
  const mockData = {
    data:
    {
      id: 1,
      name: "Festival of Marketing",
      dateTime: "2019-11-12T12:34:11Z",
      city: "London",
      description:
        "From Festivalofmarketing.com: The Festival of Marketing is a unique experience where ambitious marketers can discover, learn, celebrate and shape the future together. As the largest global event dedicated to brand marketers, the Festival reflects the very nature of ...",
      topic: "Marketing"
    }
  };

  //test to return conference by id
  it("returns conference by id", async () => {
    expect.assertions(1);

    axios.get.mockResolvedValue(mockData);

    const result = await getConferenceById(1);

    expect(result).toEqual(mockData.data);
  });
});
>>>>>>> GP19-45: added test for api
