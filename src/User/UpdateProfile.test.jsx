import React from "react";
import { Router } from "react-router-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createMemoryHistory } from "history";
import UpdateProfile from "./UpdateProfile";
import { updateUserById } from "../api";

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

	it("should renders updateProfile with correct profile information", () => {      
        const history =  createMemoryHistory();

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

    it("should on submit, save alterations for only fields that have been changed by a user", async () => {
        const history = createMemoryHistory();
        const apiReturnValue = Promise.resolve(200);
        updateUserById.mockImplementation(() => apiReturnValue);

        const wrapper = mount(
            <Router history={history}>
                <UpdateProfile user={mockData} sessionToken={{ token: "TestToken" }} id="1" setUser={jest.fn()}/>
            </Router>
        );

        wrapper.find('input[name="firstName"]').simulate("change", { target: { name: "firstName", value: "changedFirstName" } });
        wrapper.find('input[name="lastName"]').simulate("change", { target: { name: "lastName", value: "changedLastName" } });
        wrapper.find('input[name="occupation"]').simulate("change", { target: { name: "occupation", value: "changedOccupation" } });
        await wrapper.find('form').simulate("submit", { preventDefault: jest.fn() });

        expect(updateUserById).toHaveBeenCalledTimes(1);
        expect(updateUserById).toHaveBeenCalledWith("1",{
            firstName: "changedFirstName",
            lastName: "changedLastName",
            occupation: "changedOccupation"
        }, "TestToken");
        expect(history.location.pathname).toBe("/users/1");
    });

    it("should not submit when user does not change any input fields", async () => {
        const history = createMemoryHistory();
        const apiReturnValue = Promise.resolve(200);
        updateUserById.mockImplementation(() => apiReturnValue);

        const wrapper = mount(
            <Router history={history}>
                <UpdateProfile user={mockData} sessionToken={{ token: "TestToken" }} id="1" setUser={jest.fn()}/>
            </Router>
        );

        await wrapper.find('form').simulate("submit", { preventDefault: jest.fn() });
        
        expect(updateUserById).toHaveBeenCalledTimes(0);
        expect(history.location.pathname).toBe("/users/1");
    });

    it("should navigate to profile page for correct ID if user selects cancel", () => {
        const history = createMemoryHistory();

        const wrapper = mount(
            <Router history={history}>
                <UpdateProfile user={mockData} sessionToken={{ token: "TestToken" }} id="1" setUser={jest.fn()}/>
            </Router>
        );

        wrapper.find('input[name="firstName"]').simulate("change", { target: { name: "firstName", value: "changedFirstName" } });
        wrapper.find('input[value="Cancel"]').simulate("click");

        expect(updateUserById).toHaveBeenCalledTimes(0);
        expect(history.location.pathname).toBe("/users/1");
    });
});