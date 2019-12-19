jest.mock("react-router-dom", () => {
  const originalReactRouter = jest.requireActual("react-router-dom");
  return {
    ...originalReactRouter
  };
});

import React from "react";
import { Router } from "react-router-dom";
import { ConferenceDetails } from "./ConferenceDetails";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { wrapper, setMountedWrapper, findElement } from "../TestUtils";

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

  it("renders a logged-in conference details page", async () => {
    expect.assertions(8);

    const history = createMemoryHistory();
    history.push("/1");

    act(() => {
      setMountedWrapper(
        <Router history={history}>
          <ConferenceDetails
            conference={mockData}
            id="1"
            allCookies={mockCookie}
          />
        </Router>
      );
    });

    wrapper.update();
    expect(findElement(".name")).toBe(mockData.name);
    expect(findElement(".topic")).toBe(mockData.topic);
    expect(findElement(".date")).toBe("12/11/2019");
    expect(findElement(".time")).toBe("12:34");
    expect(findElement(".city")).toBe(mockData.city);
    expect(findElement(".description")).toBe(mockData.description);
    expect(findElement(".editLink")).toBe("Edit Conference");
    expect(findElement(".deleteButton")).toBe("Delete Conference");
  });

  it("renders a logged-out conference details page", async () => {
    expect.assertions(8);

    const history = createMemoryHistory();
    history.push("/1");

    act(() => {
      setMountedWrapper(
        <Router history={history}>
          <ConferenceDetails conference={mockData} id="1" />
        </Router>
      );
    });

    wrapper.update();
    expect(findElement(".name")).toBe(mockData.name);
    expect(findElement(".topic")).toBe(mockData.topic);
    expect(findElement(".date")).toBe("12/11/2019");
    expect(findElement(".time")).toBe("12:34");
    expect(findElement(".city")).toBe(mockData.city);
    expect(findElement(".description")).toBe(mockData.description);
    expect(wrapper.find(".editLink").length).toBe(0);
    expect(wrapper.find(".deleteButton").length).toBe(0);
  });
});
