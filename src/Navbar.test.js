jest.mock("react-router-dom", () => {
  const originalReactRouter = jest.requireActual("react-router-dom");
  return {
    ...originalReactRouter
  };
});

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navbar } from "./Navbar";
import { wrapper, setMountedWrapper, findElement } from "./TestUtils";

configure({ adapter: new Adapter() });

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

    act(() => {
      setMountedWrapper(
        <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
          <Navbar allCookies={mockCookie} />
        </MemoryRouter>
      );
    });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".register").length).toBe(0);
    expect(wrapper.find(".login").length).toBe(0);
    expect(findElement(".profilePage")).toBe("Profile");
    expect(findElement(".logout")).toBe("Logout");
    expect(findElement(".addConference")).toBe("Add Conference");
  });

  it("renders a logged-out navbar with text", () => {
    expect.assertions(6);

    act(() => {
      setMountedWrapper(
        <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
          <Navbar />
        </MemoryRouter>
      );
    });

    expect(wrapper).toMatchSnapshot();
    expect(findElement(".register")).toBe("Register");
    expect(findElement(".login")).toBe("Login");
    expect(wrapper.find(".profilePage").length).toBe(0);
    expect(wrapper.find(".logout").length).toBe(0);
    expect(wrapper.find(".addConference").length).toBe(0);
  });
});
