import React from "react";
import UpdateProfile from "./UpdateProfile";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Router } from "react-router-dom";
import { updateUserById } from "../api";

import { createMemoryHistory } from "history";
import { create } from "istanbul-reports";

configure({ adapter: new Adapter() });

describe("UpdateProfile", () => {
	const mockData = {
		id: "1",
		username: "TestUserName",
		firstName: "TestFirst",
		lastName: "TestLast",
		email: "Test.Email@live.co.uk",
		occupation: "TestOccupation"
	};

	//TEST 1: UpdateProfile renders with correct user information
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
    // //TEST 2: Only correct alterations saved if a field is altered by a user
    it("should on submit, save alterations for only fields that have been changed by a user", () => {
        const history = createMemoryHistory();
        const updateUserById = jest.fn();
        const apiReturnValue = Promise.resolve(200);
        updateUserById.mockImplementation(() => apiReturnValue);

        const wrapper = mount(
            <Router history={history}>
                <UpdateProfile user={mockData} sessionToken={{ token: "TestToken" }}/>
            </Router>
        );

        wrapper.find('input[name="firstName"]').simulate("change", { target: { name: "firstName", value: "changedName" } });
        // console.log(wrapper.find('form').debug());
        wrapper.find('form').simulate("submit", { preventDefault: jest.fn() });
        wrapper.update()
        expect(updateUserById).toHaveBeenCalledTimes(1);
        expect(updateUserById).toHaveBeenCalledWith({
          city: "",
          dateTime: ":00Z",
          description: "",
          name: "",
          topic: ""
        });

        //add tests for lastname and occupation
    });
    // //TEST 3: Check correct ID (from start) pushed when user selects "cancel"
    //it("should navigate to profile page for correct ID if user selects cancel");



});


