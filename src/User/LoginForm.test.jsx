import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { loginUser } from "../api";

test("allows legitimate user to login sucessfully", async () => {
  const mockLoginSucessfulResponse = { userId: 1, token: "Test Token" };
  const mockSetSessionToken = jest.fn();
  jest.spyOn(LoginForm, loginUser).mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockLoginSucessfulResponse)
    });
  });

  render(
    <Router>
      <LoginForm setSessionToken={mockSetSessionToken} />
    </Router>
  );

  fireEvent.change(screen.getByLabelText(/Username :/i), {
    target: { value: "username" }
  });
  fireEvent.change(screen.getByLabelText(/Password :/i), {
    target: { value: "Password!1" }
  });

  fireEvent.click(screen.getByText(/Submit/i));
});
