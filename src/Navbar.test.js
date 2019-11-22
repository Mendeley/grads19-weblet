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
    ...originalReactRouter
  };
});

afterEach(() => {
  jest.clearAllMocks();
  //clearing all the mocks we are creating after each test
});

describe("Navbar", () => {
  const mockSessionToken = {
    userId: 1,
    token: "3ecb9d1d-863f-4207-b076-d868e6544c3b"
  };

  it("renders a logged-in navbar with text", () => {
    expect.assertions(5);

    const history = createMemoryHistory();
    history.push("/");

    let wrapper;
    act(() => {
      wrapper = mount(
        <Router history={history}>
          <Navbar sessionToken={mockSessionToken} />
        </Router>
      );
    });

    expect(wrapper.debug()).toMatchSnapshot();
    expect(wrapper.find(".register").length).toBe(0);
    expect(wrapper.find(".login").length).toBe(0);
    expect(wrapper.find(".profilePage").get(0).props.children).toBe("Profile");
    expect(wrapper.find(".logout").get(0).props.children).toBe("Logout");
  });

  it("renders a logged-out navbar with text", () => {
    expect.assertions(5);

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
    expect(wrapper.find(".register").get(0).props.children).toBe("Register");
    expect(wrapper.find(".login").get(0).props.children).toBe("Login");
    expect(wrapper.find(".profilePage").length).toBe(0);
    expect(wrapper.find(".logout").length).toBe(0);
  });
});
