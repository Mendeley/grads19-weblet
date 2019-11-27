import React from "react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { WrappedNavbar as Navbar } from "./Navbar";

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => {
  const originalReactRouter = jest.requireActual("react-router-dom");
  return {
    ...originalReactRouter
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Navbar", () => {
  const mockCookie = {
    sessionToken: {
      userId: 1,
      token: "3ecb9d1d-863f-4207-b076-d868e6544c3b"
    }
  };

  it("renders a logged-in navbar with text", () => {
    expect.assertions(6);

    let wrapper;
    act(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
          <Navbar allCookies={mockCookie} />
        </MemoryRouter>
      );
    });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".register").length).toBe(0);
    expect(wrapper.find(".login").length).toBe(0);
    expect(wrapper.find(".profilePage").get(0).props.children).toBe("Profile");
    expect(wrapper.find(".logout").get(0).props.children).toBe("Logout");
    expect(wrapper.find(".addConference").get(0).props.children).toBe(
      "Add Conference"
    );
  });

  it("renders a logged-out navbar with text", () => {
    expect.assertions(6);

    let wrapper;
    act(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
          <Navbar />
        </MemoryRouter>
      );
    });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".register").get(0).props.children).toBe("Register");
    expect(wrapper.find(".login").get(0).props.children).toBe("Login");
    expect(wrapper.find(".profilePage").length).toBe(0);
    expect(wrapper.find(".logout").length).toBe(0);
    expect(wrapper.find(".addConference").length).toBe(0);
  });
});
