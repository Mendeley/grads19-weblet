import ProfilePage from "./ProfilePage";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Router } from "react-router-dom";
import React from "react";
import { createMemoryHistory } from "history";
import { wrapper, setWrapper, findElement } from "../TestUtils";

jest.mock("react-router-dom", () => {
  const originalReactRouter = jest.requireActual("react-router-dom");
  return {
    ...originalReactRouter,
    Link: () => "hey I'm a link"
  };
});

configure({ adapter: new Adapter() });

describe("ProfilePage", () => {
  const mockDataWithManager = {
    id: 11,
    username: "RMorey",
    firstName: "Ross",
    lastName: "Morey",
    email: "Ross.Morey@live.co.uk",
    occupation: "Fun",
    managerId: 1
  };

  const mockDataWithoutManager = {
    id: 11,
    username: "RMorey",
    firstName: "Ross",
    lastName: "Morey",
    email: "Ross.Morey@live.co.uk",
    occupation: "Fun",
    managerId: null
  };

  const mockManagerName = "Joe Bloggs";

  const mockNoManagerName = "No_Manager";

  it("renders current user's profile information with manager", async () => {
    expect.assertions(7);

    const history = createMemoryHistory();
    history.push("/users/11");

    setWrapper(
      mount(
        <Router history={history}>
          <ProfilePage
            user={mockDataWithManager}
            isCurrentUser={true}
            managerName={mockManagerName}
          />
        </Router>
      )
    );

    wrapper.update();
    expect(wrapper.find(".editLink").get(0).props.to).toBe(
      `/users/${mockDataWithManager.id}/edit`
    );
    expect(findElement(".name")).toBe(
      `${mockDataWithManager.firstName} ${mockDataWithManager.lastName}`
    );
    expect(findElement(".username")).toBe(
      `Username: ${mockDataWithManager.username}`
    );
    expect(findElement(".email")).toBe(`Email: ${mockDataWithManager.email}`);
    expect(findElement(".occupation")).toBe(
      `Occupation: ${mockDataWithManager.occupation}`
    );
    expect(findElement(".managerLink")).toBe(mockManagerName);
    expect(wrapper.find(".managerLink").get(0).props.to).toBe(
      `/users/${mockDataWithManager.managerId}`
    );
  });

  it("renders current user's profile information without manager", async () => {
    expect.assertions(7);

    const history = createMemoryHistory();
    history.push("/users/11");

    setWrapper(
      mount(
        <Router history={history}>
          <ProfilePage
            user={mockDataWithoutManager}
            isCurrentUser={true}
            managerName={mockNoManagerName}
          />
        </Router>
      )
    );

    wrapper.update();
    expect(wrapper.find(".editLink").get(0).props.to).toBe(
      `/users/${mockDataWithoutManager.id}/edit`
    );
    expect(findElement(".name")).toBe(
      `${mockDataWithoutManager.firstName} ${mockDataWithoutManager.lastName}`
    );
    expect(findElement(".username")).toBe(
      `Username: ${mockDataWithoutManager.username}`
    );
    expect(findElement(".email")).toBe(
      `Email: ${mockDataWithoutManager.email}`
    );
    expect(findElement(".occupation")).toBe(
      `Occupation: ${mockDataWithoutManager.occupation}`
    );
    expect(findElement(".manager")).toBe("Manager: None Assigned");
    expect(wrapper.find(".managerLink").length).toBe(0);
  });

  it("renders profile information of user who is not the current one", async () => {
    expect.assertions(7);

    const history = createMemoryHistory();
    history.push("/users/11");

    setWrapper(
      mount(
        <Router history={history}>
          <ProfilePage user={mockDataWithoutManager} isCurrentUser={false} />
        </Router>
      )
    );

    wrapper.update();
    expect(wrapper.find(".editLink").length).toBe(0);
    expect(findElement(".name")).toBe(
      `${mockDataWithoutManager.firstName} ${mockDataWithoutManager.lastName}`
    );
    expect(findElement(".username")).toBe(
      `Username: ${mockDataWithoutManager.username}`
    );
    expect(findElement(".email")).toBe(
      `Email: ${mockDataWithoutManager.email}`
    );
    expect(findElement(".occupation")).toBe(
      `Occupation: ${mockDataWithoutManager.occupation}`
    );
    expect(wrapper.find(".manager").length).toBe(0);
    expect(wrapper.find(".managerLink").length).toBe(0);
  });
});
