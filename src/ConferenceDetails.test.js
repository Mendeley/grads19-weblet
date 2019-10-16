import ConferenceDetails from "./ConferenceDetails";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

configure({ adapter: new Adapter() });

describe("ConferenceDetails", () => {
    const mockData = {
        id: 1,
        name: "Festival of Marketing",
        dateTime: "2019-11-12T12:34:11Z",
        city: "London",
        description:
            "From Festivalofmarketing.com: The Festival of Marketing is a unique experience where ambitious marketers can discover, learn, celebrate and shape the future together. As the largest global event dedicated to brand marketers, the Festival reflects the very nature of ...",
        topic: "Marketing"
    };
    it("renders conference details", () => {
        expect.assertions(1);

        const component = shallow(<ConferenceDetails conferences={mockData} />);

        expect(component.debug()).toMatchSnapshot();
    });
});
