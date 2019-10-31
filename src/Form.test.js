import React from "react";
import Form from "./Form";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { useHistory } from "react-router-dom";
import axios from "axios";

jest.mock("axios");

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

// jest.mock("react", () => ({
//   onSubmit: () => ({
//     //preventDefaultqq: jest.fn()
//   })
// }));

// // Testing handleChange
// describe("handleChange", () => {
//   it("should update input value on change", done => {
//     expect.assertions(2);

//     const wrapper = shallow(<Form />);
//     const nameInput = wrapper.find("#name");
//     console.log(nameInput.debug());

//     expect(nameInput.length).toEqual(1);
//     nameInput.simulate("change", { target: { name: "name", value: "TestConference" } });
//     console.log(nameInput.debug());

//     expect(nameInput.prop("value")).toEqual("TestConference");

//   });
// });

// Testing Submit
describe("submitForm", () => {
  const mockData = {
    data: {
      id: 1,
      name: "Festival of Marketing",
      dateTime: "2019-11-12T12:34:11Z",
      city: "London",
      description:
        "From Festivalofmarketing.com: The Festival of Marketing is a unique experience where ambitious marketers can discover, learn, celebrate and shape the future together. As the largest global event dedicated to brand marketers, the Festival reflects the very nature of ...",
      topic: "Marketing"
    }
  };

  const ev = { preventDefault: () => { } }

  it("should send axios request and navigate to home", async () => {
    expect.assertions(1);

    axios.post.mockResolvedValue(mockData);

    const wrapper = shallow(<Form />);

    await wrapper.simulate("submit", ev);

    expect(useHistory.push).toHaveBeenCalledTimes(1);

  });
});