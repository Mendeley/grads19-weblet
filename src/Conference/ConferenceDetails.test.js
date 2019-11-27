import React from "react";
import { Router } from "react-router-dom";
import { WrappedComponent as ConferenceDetails } from "./ConferenceDetails";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { useCookies, CookiesProvider, Cookies } from "react-cookie";

jest.mock("react-router-dom", () => {
  const originalReactRouter = jest.requireActual("react-router-dom");
  return {
    ...originalReactRouter
  };
});

// jest.mock("react-cookie", () => ({
//   useCookies: {
//     getAll: () => (sessionToken = "3ecb9d1d-863f-4207-b076-d868e6544c3b")
//   }
// }));

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

  const mockCookie = {
    sessionToken: {
      userId: 1,
      token: "3ecb9d1d-863f-4207-b076-d868e6544c3b"
    }
  };

  it.only("renders a logged-in conference details page", async () => {
    expect.assertions(8);

    const history = createMemoryHistory();
    history.push("/1");

    let wrapper;
    act(() => {
      wrapper = mount(
        <Router history={history}>
          <ConferenceDetails
            conference={mockData}
            id="1"
            cookies={mockCookie}
          />
        </Router>
      );
    });
    wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.find(".name").get(0).props.children).toBe(mockData.name);
    expect(wrapper.find(".topic").get(0).props.children).toBe(mockData.topic);
    expect(wrapper.find(".date").get(0).props.children).toBe("12/11/2019");
    expect(wrapper.find(".time").get(0).props.children).toBe("12:34");
    expect(wrapper.find(".city").get(0).props.children).toBe(mockData.city);
    expect(wrapper.find(".description").get(0).props.children).toBe(
      mockData.description
    );
    expect(wrapper.find(".editLink").get(0).props.children).toBe(
      "Edit Conference"
    );
    expect(wrapper.find(".deleteButton").get(0).props.children).toBe(
      "Delete Conference"
    );
  });

  it("renders a logged-out conference details page", async () => {
    expect.assertions(8);

    const history = createMemoryHistory();
    history.push("/1");

    let wrapper;
    act(() => {
      wrapper = mount(
        <Router history={history}>
          <WrappedComponent conference={mockData} id="1" />
        </Router>
      );
    });
    wrapper.update();
    expect(wrapper.find(".name").get(0).props.children).toBe(mockData.name);
    expect(wrapper.find(".topic").get(0).props.children).toBe(mockData.topic);
    expect(wrapper.find(".date").get(0).props.children).toBe("12/11/2019");
    expect(wrapper.find(".time").get(0).props.children).toBe("12:34");
    expect(wrapper.find(".city").get(0).props.children).toBe(mockData.city);
    expect(wrapper.find(".description").get(0).props.children).toBe(
      mockData.description
    );
    expect(wrapper.find(".editLink").length).toBe(0);
    expect(wrapper.find(".deleteButton").length).toBe(0);
  });
});
