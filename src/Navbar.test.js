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
  it("renders a navbar with text", () => {
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
