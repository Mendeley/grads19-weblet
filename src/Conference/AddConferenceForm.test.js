jest.mock("../api", () => ({
  createNewConference: jest.fn()
}));

import React from "react";
import { Router, MemoryRouter } from "react-router-dom";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createMemoryHistory } from "history";
import { AddConferenceForm } from "./AddConferenceForm";
import { createNewConference } from "../api";

configure({ adapter: new Adapter() });

describe("submitForm", () => {
  let ev;
  beforeEach(() => {
    ev = { preventDefault: jest.fn() };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockCookie = {
    sessionToken: {
      userId: 1,
      token: "3ecb9d1d-863f-4207-b076-d868e6544c3b"
    }
  };

  it("should send axios request", async () => {
    expect.assertions(2);

    const apiReturnValue = Promise.resolve(200);
    createNewConference.mockImplementation(() => apiReturnValue);

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: "/add", key: "testKey" }]}>
        <AddConferenceForm allCookies={mockCookie} />
      </MemoryRouter>
    );

    wrapper.find(AddConferenceForm).simulate("submit", ev);

    expect(createNewConference).toHaveBeenCalledTimes(1);
    expect(createNewConference).toHaveBeenCalledWith(
      {
        city: "",
        dateTime: ":00Z",
        description: "",
        name: "",
        topic: ""
      },
      mockCookie.sessionToken.token
    );
  });
  it("should navigate to home if axios request successful", async () => {
    expect.assertions(3);

    const apiReturnValue = Promise.resolve(200);
    createNewConference.mockImplementation(() => apiReturnValue);

    const history = createMemoryHistory();
    history.push("/add");

    const wrapper = mount(
      <Router history={history}>
        <AddConferenceForm allCookies={mockCookie} />
      </Router>
    );

    wrapper.find(AddConferenceForm).simulate("submit", ev);

    await apiReturnValue;

    expect(ev.preventDefault).toHaveBeenCalledTimes(1);
    expect(createNewConference).toHaveBeenCalledTimes(1);
    expect(history.location.pathname).toBe("/");
  });
  it("should stay on page if axios request unsuccessful", async () => {
    expect.assertions(1);

    const apiReturnValue = Promise.reject(400);
    createNewConference.mockImplementation(() => apiReturnValue);

    const history = createMemoryHistory();
    history.push("/add");

    const wrapper = mount(
      <Router history={history}>
        <AddConferenceForm allCookies={mockCookie} />
      </Router>
    );

    wrapper.find(AddConferenceForm).simulate("submit", ev);

    expect(history.location.pathname).toBe("/add");
  });
});
