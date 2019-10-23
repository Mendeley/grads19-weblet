import Navbar from "./Navbar";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

configure({ adapter: new Adapter() });
//adapter adapts enzyme for our version of react

jest.mock('react-router-dom', () => {
    return {
        Link: () => "hey I'm a link"
        //defines a mock link for testing purposes
    }
});

afterEach(() => {
    jest.clearAllMocks()
    //clearing all the mocks we are creating after each test
});

describe("Navbar", () => {
    it("renders a navbar with text", () => {
        expect.assertions(1);

        const component = shallow(<Navbar />);

        expect(component).toMatchSnapshot();
    });
});