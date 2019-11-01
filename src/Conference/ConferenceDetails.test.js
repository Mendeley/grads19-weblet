import ConferenceDetails from "./ConferenceDetails";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Router } from "react-router-dom";
import React from "react";
import { getConferenceById } from "../api";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { getTimestring, getDatestring } from "../utils";

jest.mock("react-router-dom", () => {
  const originalReactRouter = jest.requireActual("react-router-dom");
  return {
    ...originalReactRouter,
    useParams: jest.fn(() => ({ id: "1" })),
    //useHistory: jest.fn(),
    Link: () => "hey I'm a link"
  };
});

jest.mock("../api", () => ({
  getConferenceById: jest.fn()
}));

configure({ adapter: new Adapter() });

/* This is a temporary workaround for enzyme/react bug #14769 (github.com/facebook/react/issues/14769):

Enzyme throws an warning when used with useEffect hook. We're surpressing this warning as it's not informative
and will be removed in future releases.
*/
const consoleError = console.error;
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation((...args) => {
    if (
      !args[0].includes(
        "Warning: An update to %s inside a test was not wrapped in act"
      )
    ) {
      consoleError(...args);
    }
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("ConferenceDetails", () => {
  const mockData = {
    id: 1,
    name: "Festival of Marketing",
    dateTime: "2019-11-12T12:34:11Z",
    city: "London",
    description:
      "From Festivalofmarketing.com: The Festival of Marketing is a unique experience where ambitious marketers can discover, learn, celebrate and shape the future together. As the largest global event dedicated to brand marketers, the Festival reflects the very nature of ...",
    topic: "Marketing"
  };

  it("renders conference details", async () => {
    expect.assertions(6);

    const history = createMemoryHistory();
    history.push("/1");

    const apiReturnValue = Promise.resolve(mockData);
    getConferenceById.mockImplementation(() => apiReturnValue);

    let wrapper;
    await act(async () => {
      wrapper = mount(
        <Router history={history}>
          <ConferenceDetails />
        </Router>
      );

      await apiReturnValue;
    });
    wrapper.update();
    expect(wrapper.containsMatchingElement(<h3>{mockData.name}</h3>)).toEqual(
      true
    );
    expect(wrapper.containsMatchingElement(<p>{mockData.topic}</p>)).toEqual(
      true
    );
    expect(wrapper.containsMatchingElement(<p>12/11/2019</p>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<p>12:34</p>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<p>{mockData.city}</p>)).toEqual(
      true
    );
    expect(
      wrapper.containsMatchingElement(<p>{mockData.description}</p>)
    ).toEqual(true);
  });
});
