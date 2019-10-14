import axios from "axios";
import { getConferenceList } from "./api";

jest.mock("axios");

describe("getConferenceList", () => {
  const mockData = {
    id: 1,
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

  it("returns expected data", async () => {
    expect.assertions(1);

    axios.get.mockImplementation(() => Promise.resolve(mockData));

    const result = await getConferenceList();

    expect(result).toEqual(mockData.data);
  });
});
