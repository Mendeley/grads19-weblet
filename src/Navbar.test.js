import Navbar, { StyledNavbar } from "./Navbar";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

configure({ adapter: new Adapter() });

describe("Navbar", () => {
    it("renders a navbar", () => {
        expect.assertions(1);

        const component = shallow(<Navbar onClick={() => { }}></Navbar>);

        expect(component.debug()).toMatchSnapshot();
    });

    // it("renders a button with text", () => {
    //     expect.assertions(1);

    //     const component = shallow(<Button onClick={() => { }}>Test</Button>);

    //     expect(component.debug()).toMatchSnapshot();
    // });
    // it("executes passed function when clicked", () => {
    //     expect.assertions(1);

    //     const callBack = jest.fn();

    //     const wrapper = shallow(<Button onClick={callBack}>Test</Button>);

    //     wrapper.find(StyledButton).simulate("click");

    //     expect(callBack).toHaveBeenCalledTimes(1);
    // });
});