import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button, { StyledButton } from "./Button";

configure({ adapter: new Adapter() });

describe("Button", () => {
  it("renders a blank button", () => {
    expect.assertions(1);

    const component = shallow(<Button onClick={() => {}}></Button>);

    expect(component).toMatchSnapshot();
  });
  it("renders a button with text", () => {
    expect.assertions(1);

    const component = shallow(<Button onClick={() => {}}>Test</Button>);

    expect(component).toMatchSnapshot();
  });
  it("executes passed function when clicked", () => {
    expect.assertions(1);

    const callBack = jest.fn();

    const wrapper = shallow(<Button onClick={callBack}>Test</Button>);

    wrapper.find(StyledButton).simulate("click");

    expect(callBack).toHaveBeenCalledTimes(1);
  });
});
