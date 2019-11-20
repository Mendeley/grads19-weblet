import Navbar from "./Navbar";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });
//adapter adapts enzyme for our version of react

jest.mock("react-router-dom", () => {
  const originalReactRouter = jest.requireActual("react-router-dom");
  return {
    ...originalReactRouter,
    Link: () => "hey I'm a link"
  };
});

afterEach(() => {
  jest.clearAllMocks();
  //clearing all the mocks we are creating after each test
});

describe("Navbar", () => {
  const mockToken = {
    userId: 1,
    token: "3ecb9d1d-863f-4207-b076-d868e6544c3b"
  };

  it("renders a logged-in navbar with text", () => {
    expect.assertions(1);

    const history = createMemoryHistory();
    history.push("/");

    let wrapper;
    act(() => {
      wrapper = mount(
        <Router history={history}>
          <Navbar token={mockToken} />
        </Router>
      );
    });

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("renders a logged-out navbar with text", () => {
    expect.assertions(1);

    const history = createMemoryHistory();
    history.push("/");

    let wrapper;
    act(() => {
      wrapper = mount(
        <Router history={history}>
          <Navbar />
        </Router>
      );
    });

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
