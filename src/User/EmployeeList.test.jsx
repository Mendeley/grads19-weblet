import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { wrapper, setMountedWrapper } from "../TestUtils";
import EmployeeList from "./EmployeeList";

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
    expect.assertions(7);

    const history = createMemoryHistory();
    history.push("/users/11");

    setMountedWrapper(
      <Router history={history}>
        <EmployeeList employees={mockEmployees} />
      </Router>
    );

    wrapper.update();
    expect(wrapper.find(".employeeLink").length).toBe(3);
    expect(wrapper.find(".employeeLink").get(0).props.link).toBe(
      `/users/${mockEmployees[0].id}`
    );
    expect(wrapper.find(".employeeLink").get(1).props.link).toBe(
      `/users/${mockEmployees[1].id}`
    );
    expect(wrapper.find(".employeeLink").get(2).props.link).toBe(
      `/users/${mockEmployees[2].id}`
    );
    expect(wrapper.find(".employeeLink").get(0).props.displayText).toBe(
      employeeName(mockEmployees, 0)
    );
    expect(wrapper.find(".employeeLink").get(1).props.displayText).toBe(
      employeeName(mockEmployees, 1)
    );
    expect(wrapper.find(".employeeLink").get(2).props.displayText).toBe(
      employeeName(mockEmployees, 2)
    );
  });
});
