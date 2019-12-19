jest.mock("../api", () => ({
  getConferenceList: jest.fn()
}));

import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { mount, configure } from "enzyme";
import { Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import { getConferenceList } from "../api";
import ConferenceItem from "./ConferenceItem";
import ConferenceList from "./ConferenceList";

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
  it("given list of 2 conferences renders ConferenceList with 2 items", async () => {
    expect.assertions(1);

    const history = createMemoryHistory();
    history.push("/");

    const apiReturnValue = Promise.resolve(mockData);
    getConferenceList.mockImplementation(() => apiReturnValue);

    let wrapper;
    await act(async () => {
      wrapper = mount(
        <Router history={history}>
          <ConferenceList />
        </Router>
      );

      await apiReturnValue;
    });

    wrapper.update();

    expect(wrapper.find(ConferenceItem).length).toEqual(2);
  });
  it("given empty list renders ConferenceList with 0 items", async () => {
    expect.assertions(3);

    const apiReturnValue = Promise.resolve([]);
    getConferenceList.mockImplementation(() => apiReturnValue);

    let wrapper;
    await act(async () => {
      wrapper = mount(<ConferenceList />);

      await apiReturnValue;
    });

    expect(wrapper.containsMatchingElement(<p>Loading...</p>)).toEqual(false);
    expect(wrapper.find(ConferenceItem).length).toEqual(0);
    expect(
      wrapper.containsMatchingElement(<p>An error has occurred...</p>)
    ).toEqual(false);
  });
});
