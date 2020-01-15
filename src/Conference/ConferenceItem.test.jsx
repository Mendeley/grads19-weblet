import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ConferenceItem from "./ConferenceItem";

test("displays conference item", async () => {
  const mockConference = {
    id: 1,
    name: "Mock Conference",
    topic: "Mock Topic",
    dateTime: "2020-11-12T12:34:11Z",
    city: "Mock City"
  };

  const { getByRole, getByText, getByTestId } = render(
    <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
      <ConferenceItem conference={mockConference} />
    </MemoryRouter>
  );

  expect(getByRole("heading").textContent).toBe(mockConference.name);
  expect(getByTestId("topic").textContent).toBe(mockConference.topic);
  expect(getByTestId("date").textContent).toBe("12/11/2020");
  expect(getByText(":", { exact: false }).textContent).toBe("12:34");
  expect(getByTestId("city").textContent).toBe(mockConference.city);
  expect(getByText("Details").href).toBe(
    `http://localhost/${mockConference.id}`
  );
});
