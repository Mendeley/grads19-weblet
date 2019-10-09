import React from "react";
import { shallow, configure } from "enzyme";
import ConferenceList from "./ConferenceList";
import ConferenceItem from "./ConferenceItem";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("ConferenceList", () => {
  const mockData = [
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
  ];
  describe("given data renders ConferenceList items", () => {
    it("renders data", () => {
      let wrapper = shallow(<ConferenceList conferences={mockData} />);
      expect(wrapper.find(ConferenceItem).length).toEqual(2);
      wrapper = shallow(<ConferenceList conferences={[]} />);
      expect(wrapper.find(ConferenceItem).length).toEqual(0);
    });
  });
});
