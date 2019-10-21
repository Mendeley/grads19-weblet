import Navbar from "./Navbar";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NavLink } from 'react-router-dom';
import React from "react";

configure({ adapter: new Adapter() });
//what is adapter? Does it adapt enzyme for our version of react?

jest.mock('react-router-dom', () => {
    return {
        NavLink: () => "hey I'm a navlink"
        //defines a mock navlink for testing purposes
    }
});

afterEach(() => {
    jest.clearAllMocks()
    //clearing all the mocks we are creating after each test
});

describe("Navbar", () => {
    it("renders a navbar with text", () => {
        expect.assertions(2);

        const component = shallow(<Navbar />);

        expect(component).toMatchSnapshot();
        expect(component.find(NavLink).childAt(0).text()).toEqual('Home');
    });
});