import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import ProfilePage from "./ProfilePage";

jest.mock("react-router-dom", () => {
  const originalReactRouter = jest.requireActual("react-router-dom");
  return {
    ...originalReactRouter,
    Link: () => "hey I'm a link"
  };
});

configure({ adapter: new Adapter() });

describe("ProfilePage", () => {
  const mockData = {
    id: "11",
    username: "RMorey",
    firstName: "Ross",
    lastName: "Morey",
    email: "Ross.Morey@live.co.uk",
    occupation: "Fun"
  };

  it("renders profile information", async () => {
    expect.assertions(5);

    const history = createMemoryHistory();
    history.push("/users/11");

    const wrapper = mount(
      <Router history={history}>
        <ProfilePage user={mockData} />
      </Router>
    );

    wrapper.update();
    expect(wrapper.find(".editLink").get(0).props.to).toBe(
      `/users/${mockData.id}/edit`
    );
    expect(wrapper.find(".name").get(0).props.children).toBe(
      `Hello, ${mockData.firstName} ${mockData.lastName}!`
    );
    expect(wrapper.find(".username").get(0).props.children).toBe(
      `Username: ${mockData.username}`
    );
    expect(wrapper.find(".email").get(0).props.children).toBe(
      `Email: ${mockData.email}`
    );
    expect(wrapper.find(".occupation").get(0).props.children).toBe(
      `Occupation: ${mockData.occupation}`
    );
  });
});
