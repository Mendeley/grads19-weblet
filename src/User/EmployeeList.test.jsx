import EmployeeList from "./EmployeeList";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Router } from "react-router-dom";
import React from "react";
import { createMemoryHistory } from "history";
import { wrapper, setMountedWrapper } from "../TestUtils";

jest.mock("react-router-dom", () => {
  const originalReactRouter = jest.requireActual("react-router-dom");
  return {
    ...originalReactRouter,
    Link: () => "hey I'm a link"
  };
});

configure({ adapter: new Adapter() });

describe("EmployeeList", () => {
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

  it("renders List of employees", async () => {
    expect.assertions(8);

    const history = createMemoryHistory();
    history.push("/users/11");

    setMountedWrapper(
      <Router history={history}>
        <EmployeeList employees={mockEmployees} />
      </Router>
    );

    wrapper.update();
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
});
