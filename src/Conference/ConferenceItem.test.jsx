import React from "react";
import { render, screen } from "@testing-library/react";
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

  render(
    <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
      <ConferenceItem conference={mockConference} />
    </MemoryRouter>
  );

  expect(screen.getByRole("header").textContent).toBe(mockConference.name);
  expect(screen.getByTestId("topic").textContent).toBe(mockConference.topic);
  expect(screen.getByText("/", { exact: false }).textContent).toBe(
    "12/11/2020"
  );
  expect(screen.getByText(":", { exact: false }).textContent).toBe("12:34");
  expect(screen.getByTestId("city").textContent).toBe(mockConference.city);
  expect(screen.getByText("More details...").href).toBe(
    `http://localhost/${mockConference.id}`
  );
});
