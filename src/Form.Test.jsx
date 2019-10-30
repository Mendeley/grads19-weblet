import { useHistory, BrowserRouter } from "react-router-dom";
import React from "react";
import Form from "./Form";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from "./Input";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

// Testing handleChange
describe("handleChange", () => {
  it("should update input value on change", done => {
    const wrapper = shallow(<Form />);
    const nameInput = wrapper.find("#name");
    console.log(nameInput.debug());

    expect(nameInput.length).toEqual(1);
    nameInput.simulate("change", {
      target: { name: "name", value: "Test Conference" }
    });

    setImmediate(() => {
      wrapper.update();
      expect(nameInput.prop("value")).toEqual("Test Conference");
      done();
    });
  });
});

// Testing Errors
// Testing Submit
