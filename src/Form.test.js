import React from "react";
import Form from "./Form";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { createNewConference } from "./api";

configure({ adapter: new Adapter() });

jest.mock("./api", () => ({
  createNewConference: jest.fn()
}));

describe("submitForm", () => {
  let ev;
  beforeEach(() => {
    ev = { preventDefault: jest.fn() };
  });

  const mockToken = "3ecb9d1d-863f-4207-b076-d868e6544c3b";

  it("should send axios request", async () => {
    expect.assertions(2);

    const apiReturnValue = Promise.resolve(200);
    createNewConference.mockImplementation(() => apiReturnValue);

    const history = createMemoryHistory();
    history.push("/add");

    const wrapper = mount(
      <Router history={history}>
        <Form token={mockToken} />
      </Router>
    );

    wrapper.find(Form).simulate("submit", ev);

    expect(createNewConference).toHaveBeenCalledTimes(1);
    expect(createNewConference).toHaveBeenCalledWith(
      {
        city: "",
        dateTime: ":00Z",
        description: "",
        name: "",
        topic: ""
      },
      mockToken
    );
  });
  it("should navigate to home if axios request sucessful", async () => {
    expect.assertions(1);

    const apiReturnValue = Promise.resolve(200);
    createNewConference.mockImplementation(() => apiReturnValue);

    const history = createMemoryHistory();
    history.push("/add");

    const wrapper = mount(
      <Router history={history}>
        <Form />
      </Router>
    );

    wrapper.find(Form).simulate("submit", ev);

    await apiReturnValue;
    expect(history.location.pathname).toBe("/");
  });
  it("should stay on page if axios request unsucessful", async () => {
    expect.assertions(1);

    const apiReturnValue = Promise.reject(400);
    createNewConference.mockImplementation(() => apiReturnValue);

    const history = createMemoryHistory();
    history.push("/add");

    const wrapper = mount(
      <Router history={history}>
        <Form />
      </Router>
    );

    wrapper.find(Form).simulate("submit", ev);

    expect(history.location.pathname).toBe("/add");
  });
});
