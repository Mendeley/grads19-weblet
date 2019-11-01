import Input from "./Input";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

configure({ adapter: new Adapter() });

describe("Input", () => {
  it("renders a text input", () => {
    expect.assertions(1);

    const component = shallow(<Input type="text" />);

    expect(component).toMatchSnapshot();
  });
  it("renders a dateTime input", () => {
    expect.assertions(1);

    const component = shallow(<Input type="datetime-local" />);

    expect(component).toMatchSnapshot();
  });
  it("renders a submit input", () => {
    expect.assertions(1);

    const component = shallow(<Input type="submit" />);

    expect(component).toMatchSnapshot();
  });
});
