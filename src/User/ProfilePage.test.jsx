import ProfilePage from "./ProfilePage";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Router } from "react-router-dom";
import React from "react";
import { createMemoryHistory } from "history";
import { wrapper, setMountedWrapper, findElement } from "../TestUtils";
import { noManager } from "../Constants/Constants";

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

  const mockEmployees = [
    {
      id: 12,
      username: "Employee1",
      firstName: "Employee",
      lastName: "One",
      email: "Employee.One@live.co.uk",
      occupation: "Test Employee",
      managerId: 11
    },
    {
      id: 13,
      username: "Employee2",
      firstName: "Employee",
      lastName: "Two",
      email: "Employee.Two@live.co.uk",
      occupation: "Test Employee",
      managerId: 11
    },
    {
      id: 14,
      username: "Employee3",
      firstName: "Employee",
      lastName: "Three",
      email: "Employee.Three@live.co.uk",
      occupation: "Test Employee",
      managerId: 11
    }
  ];

  const employeeName = (employeeList, employeeIndex) => {
    const employee = employeeList[employeeIndex];
    return `${employee.firstName} ${employee.lastName}`;
  };

  const mockNoEmployees = [];

  it("renders current user's profile information with manager and employees", async () => {
    expect.assertions(17);

    const history = createMemoryHistory();
    history.push("/users/11");

    setMountedWrapper(
      <Router history={history}>
        <ProfilePage
          user={mockDataWithManager}
          isCurrentUser={true}
          managerName={mockManagerName}
          employees={mockEmployees}
        />
      </Router>
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
    expect(wrapper.find(".employeesCard").length).toBe(2);
    expect(wrapper.find(".employeeListHeader").length).toBe(2);
    expect(wrapper.find(".employeeList").length).toBe(2);
    expect(wrapper.find(".employeeLink").length).toBe(6);
    expect(wrapper.find(".employeeLink").get(0).props.to).toBe(
      `/users/${mockEmployees[0].id}`
    );
    expect(wrapper.find(".employeeLink").get(2).props.to).toBe(
      `/users/${mockEmployees[1].id}`
    );
    expect(wrapper.find(".employeeLink").get(4).props.to).toBe(
      `/users/${mockEmployees[2].id}`
    );
    expect(wrapper.find(".employeeLink").get(0).props.children).toBe(
      employeeName(mockEmployees, 0)
    );
    expect(wrapper.find(".employeeLink").get(2).props.children).toBe(
      employeeName(mockEmployees, 1)
    );
    expect(wrapper.find(".employeeLink").get(4).props.children).toBe(
      employeeName(mockEmployees, 2)
    );
  });

  it("renders current user's profile information without manager or employees", async () => {
    expect.assertions(11);

    const history = createMemoryHistory();
    history.push("/users/11");

    setMountedWrapper(
      <Router history={history}>
        <ProfilePage
          user={mockDataWithoutManager}
          isCurrentUser={true}
          managerName={noManager}
          employees={mockNoEmployees}
        />
      </Router>
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
    expect(wrapper.find(".employeesCard").length).toBe(2);
    expect(wrapper.find(".employeeListHeader").length).toBe(2);
    expect(wrapper.find(".employeeList").length).toBe(0);
    expect(wrapper.find(".employeeLink").length).toBe(0);
  });

  it("renders profile information of user who is not the current one", async () => {
    expect.assertions(11);

    const history = createMemoryHistory();
    history.push("/users/11");

    setMountedWrapper(
      <Router history={history}>
        <ProfilePage user={mockDataWithoutManager} isCurrentUser={false} />
      </Router>
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
    expect(wrapper.find(".employeesCard").length).toBe(0);
    expect(wrapper.find(".employeeListHeader").length).toBe(0);
    expect(wrapper.find(".employeeList").length).toBe(0);
    expect(wrapper.find(".employeeLink").length).toBe(0);
  });
});
