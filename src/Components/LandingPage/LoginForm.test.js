import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

/*what we want to test:
1. are all the fields rendered with the correct default values and submit is disabled.
2. submit isdisabled unless password and email fields have valid values
3. inputs display error messages if not valid.
todo:
2. can the form be submitted.
3. if the login fails do we display an error message
4. if the login works do we redirect correctly.

*/
describe("LoginForm", () => {
  it("should render all the fields with correct default values", () => {
    const { getByLabelText, getByTestId } = render(<LoginForm />);
    expect(getByLabelText("Email").value).toBe("");
    expect(getByLabelText("Password").value).toBe("");
    expect(getByTestId("submit-login")).toBeDisabled();
  });

  describe("with password but invalid email field ", () => {
    it("submit should be disabled", () => {
      const { getByLabelText, getByTestId } = render(<LoginForm />);
      const password = getByLabelText("Password");
      const email = getByLabelText("Email");
      userEvent.type(password, "123456");
      userEvent.type(email, "invalid email");
      email.blur();
      expect(getByTestId("submit-login")).toBeDisabled();
    });

    it("email error should be displayed", () => {
      const { getByLabelText } = render(<LoginForm />);
      const email = getByLabelText("Email");
      userEvent.type(email, "invalid");
      email.blur();
      expect(email).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("with email but invalid password field", () => {
    it("submit should be disabled", () => {
      const { getByLabelText, getByTestId } = render(<LoginForm />);
      const password = getByLabelText("Password");
      const email = getByLabelText("Email");
      userEvent.type(password, "");
      password.blur();
      userEvent.type(email, "test@test.com");
      expect(getByTestId("submit-login")).toBeDisabled();
    });

    it("invalid passsword error should be displayed", () => {
      const { getByLabelText } = render(<LoginForm />);
      const password = getByLabelText("Password");
      userEvent.type(password, "");
      password.blur();
      expect(password).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("with password and email values", () => {
    it("submit is not disabled", () => {
      const { getByLabelText, getByTestId } = render(<LoginForm />);
      const email = getByLabelText("Email");
      const password = getByLabelText("Password");
      userEvent.type(email, "test@test.com");
      email.blur();
      userEvent.type(password, "abcdef");
      password.blur();
      expect(getByTestId("submit-login")).not.toBeDisabled();
    });
    it.todo("it submits");
  });

  describe("when submitted encounters network/backend error", () => {
    it.todo("should diplay error message");
  });

  describe("onsuccesful login", () => {
    it.todo("should redirect to the users profile page");
  });
});
