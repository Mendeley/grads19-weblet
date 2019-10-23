import ConferenceDetails from "./ConferenceDetails";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { useParams } from "react-router-dom";
import { act } from 'react-dom/test-utils';
import React from "react";
import axios from "axios";

jest.mock("axios");

const consoleError = console.error;

jest.mock('react-router-dom', () => {
  return {
    useParams: jest.fn(),
    Link: () => "hey I'm a link"
  }
});

configure({ adapter: new Adapter() });

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args) => {
    if (!args[0].includes('Warning: An update to %s inside a test was not wrapped in act')) {
      consoleError(...args);
    }
  })
})

afterEach(() => {
  jest.clearAllMocks()
});

describe("ConferenceDetails", () => {
  const mockData = {
    data: {
      id: 1,
      name: "Festival of Marketing",
      dateTime: "2019-11-12T12:34:11Z",
      city: "London",
      description:
        "From Festivalofmarketing.com: The Festival of Marketing is a unique experience where ambitious marketers can discover, learn, celebrate and shape the future together. As the largest global event dedicated to brand marketers, the Festival reflects the very nature of ...",
      topic: "Marketing"
    }
  };

  it("renders conference details", (done) => {
    expect.assertions(1);

    axios.get.mockResolvedValue(mockData);

    useParams.mockReturnValue({ id: '1' });
    let component;
    component = mount(<ConferenceDetails />);

    setImmediate(() => {
      component.update();
      expect(component.debug()).toMatchSnapshot();
      done();
    })

  });
});
