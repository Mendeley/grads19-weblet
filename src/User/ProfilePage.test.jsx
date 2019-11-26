import ProfilePage from "./ProfilePage";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Router } from "react-router-dom";
import React from "react";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";

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
        id: '11',
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

    let wrapper;
    act(() => {
      wrapper = mount(
        <Router history={history}>
          <ProfilePage user={mockData} />
        </Router>
      );
    });
      wrapper.update();
    expect(wrapper.find(".editLink").get(0).props.to).toBe(`/users/edit/${mockData.id}`);     
    expect(wrapper.find(".name").get(0).props.children).toBe(`Hello, ${mockData.firstName} ${mockData.lastName}!`);
    expect(wrapper.find(".username").get(0).props.children).toBe(`Username: ${mockData.username}`);
    expect(wrapper.find(".email").get(0).props.children).toBe(`Email: ${mockData.email}`);
    expect(wrapper.find(".occupation").get(0).props.children).toBe(`Occupation: ${mockData.occupation}`);
  });
});