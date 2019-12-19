import React from "react";
import { Router } from "react-router-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createMemoryHistory } from "history";
import UpdateProfile from "./UpdateProfile";
import { updateUserById } from "../api";
import { doesNotReject } from "assert";

configure({ adapter: new Adapter() });

jest.mock("../api", () => ({
  updateUserById: jest.fn()
}));

afterEach(() => jest.clearAllMocks());

describe("UpdateProfile", () => {
  const mockData = {
    id: "1",
    username: "TestUserName",
    firstName: "TestFirst",
    lastName: "TestLast",
    email: "Test.Email@live.co.uk",
    occupation: "TestOccupation"
  };

  const mockFavouriteConferenceList = {
    id: 1,
    name: "Festival of Marketing",
    dateTime: "2019-11-12T12:34:11Z",
    city: "London",
    description:
      "From Festivalofmarketing.com: The Festival of Marketing is a unique experience where ambitious marketers can discover, learn, celebrate and shape the future together. As the largest global event dedicated to brand marketers, the Festival reflects the very nature of ...",
    topic: "Marketing"
  };

  it("should renders updateProfile with correct profile information", () => {
    const history = createMemoryHistory();

    const wrapper = mount(
      <Router history={history}>
        <UpdateProfile user={mockData} />
      </Router>
    );

    expect(wrapper.find('input[name="firstName"]').props().value).toBe(
      mockData.firstName
    );
    expect(wrapper.find('input[name="lastName"]').props().value).toBe(
      mockData.lastName
    );
    expect(wrapper.find('input[name="occupation"]').props().value).toBe(
      mockData.occupation
    );
  });

  it.only("should on submit, save alterations for only fields that have been changed by a user", async done => {
    const history = createMemoryHistory();
    const apiReturnValue = Promise.resolve(200);
    await updateUserById.mockImplementation(() => apiReturnValue);

    const wrapper = mount(
      <Router history={history}>
        <UpdateProfile
          user={mockData}
          sessionToken={{ token: "TestToken" }}
          id="1"
        />
      </Router>
    );

    wrapper.find('input[name="firstName"]').simulate("change", {
      target: { name: "firstName", value: "changedFirstName" }
    });
    wrapper.find('input[name="lastName"]').simulate("change", {
      target: { name: "lastName", value: "changedLastName" }
    });
    wrapper.find('input[name="occupation"]').simulate("change", {
      target: { name: "occupation", value: "changedOccupation" }
    });
    await wrapper
      .find("form")
      .simulate("submit", { preventDefault: jest.fn() });

    expect(updateUserById).toHaveBeenCalledTimes(1);
    expect(updateUserById).toHaveBeenCalledWith(
      "1",
      {
        firstName: "changedFirstName",
        lastName: "changedLastName",
        occupation: "changedOccupation"
      },
      "TestToken"
    );
    console.log(history.location);

    setTimeout(() => {
      expect(history.location.pathname).toBe("/users/1");
      done();
    });
  });

  it("should not submit when user does not change any input fields", async () => {
    const history = createMemoryHistory();
    const apiReturnValue = Promise.resolve(200);
    updateUserById.mockImplementation(() => apiReturnValue);

    const wrapper = mount(
      <Router history={history}>
        <UpdateProfile
          user={mockData}
          sessionToken={{ token: "TestToken" }}
          id="1"
          setUser={jest.fn()}
        />
      </Router>
    );

    await wrapper
      .find("form")
      .simulate("submit", { preventDefault: jest.fn() });

    expect(updateUserById).toHaveBeenCalledTimes(0);
    console.log(history.location);

    expect(history.location.pathname).toBe("/users/1");
  });

  it("should navigate to profile page for correct ID if user selects cancel", () => {
    const history = createMemoryHistory();

    const wrapper = mount(
      <Router history={history}>
        <UpdateProfile
          user={mockData}
          sessionToken={{ token: "TestToken" }}
          id="1"
          setUser={jest.fn()}
        />
      </Router>
    );

    wrapper.find('input[name="firstName"]').simulate("change", {
      target: { name: "firstName", value: "changedFirstName" }
    });
    wrapper.find('input[value="Cancel"]').simulate("click");

    expect(updateUserById).toHaveBeenCalledTimes(0);
    expect(history.location.pathname).toBe("/users/1");
  });
});
