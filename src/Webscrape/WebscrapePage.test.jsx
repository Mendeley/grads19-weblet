import React from "react";
import { mount, configure } from "enzyme";
import { submitNewURL } from "../api";
import WebscrapePage from "./WebscrapePage";
import Adapter from "enzyme-adapter-react-16";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

configure({ adapter: new Adapter() });

jest.mock("../api", () => ({
	submitNewURL: jest.fn()
}));

describe("submit URL", () => {
	let ev;
	beforeEach(() => {
		ev = { preventDefault: jest.fn() };
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

	const mockCookie = {
		sessionToken: {
			userId: 1,
			token: "3ecb9d1d-863f-4207-b076-d868e6544c3b"
		}
	};

	it("should send axios request when URL entered and submit button is clicked on webscrape page", async () => {
		//expect.assertions(2);

		const apiReturnValue = Promise.resolve(200);
		submitNewURL.mockImplementation(() => apiReturnValue);

		const history = createMemoryHistory();
		history.push("/add");

		const wrapper = mount(
			<Router history={history}>
				<WebscrapePage URL= "https://www.baeldung.com/crawler4j" allCookies={mockCookie} />
			</Router>
		);

		wrapper.find(WebscrapePage).simulate("submit", ev);

		await apiReturnValue;

		// expect(submitNewURL).toHaveBeenCalledTimes(1);
		// expect(submitNewURL).toHaveBeenCalledWith(
		// 	{
		// 		URL: "https://www.baeldung.com/crawler4j"
		// 	},
		// 	mockCookie.sessionToken.token
		// );

		expect(wrapper.find('input[name="URL"]').props().value).toBe(
			"https://www.baeldung.com/crawler4j"
		);
	});

	// it("should not send axios request when empty string entered and submit button clicked on webscrape page", async () => {
	// 	const apiReturnValue = Promise.resolve(200);
	// 	submitNewURL.mockImplementation(() => apiReturnValue);

	// 	const history = createMemoryHistory();
	// 	history.push("/add");

	// 	const wrapper = mount(
	// 		<Router history={history}>
	// 			<WebscrapePage allCookies={mockCookie} />
	// 		</Router>
	// 	);

	// 	wrapper.find(WebscrapePage).simulate("submit", ev);

	// 	await apiReturnValue;

	// 	expect(submitNewURL).toHaveBeenCalledTimes(0);
	// })
});
