import Button, { StyledButton } from "./Button";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

configure({ adapter: new Adapter() });

describe("Button", () => {
  it("renders a blank button", () => {
    expect.assertions(1);

    const result = shallow(<Button />);

    expect(result.debug()).toMatchSnapshot();
  });
  it("renders a button with text", () => {
    expect.assertions(1);

    const result = shallow(<Button children="Test" />);

    expect(result.debug()).toMatchSnapshot();
  });
  it("executes passed function when clicked", () => {
    expect.assertions(1);

    const callBack = jest.fn();

    const wrapper = shallow(<Button onClick={callBack} children="Test" />);

    wrapper.find(StyledButton).simulate("click");

    expect(callBack).toHaveBeenCalledTimes(1);
  });
});
