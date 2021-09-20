import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUpForm from "./SignUpForm";
import userEvent from "@testing-library/user-event";

describe("SignUpForm", () => {
  it("should render all the fields with correct default values", () => {
    const { getByLabelText, getByTestId } = render(<SignUpForm />);
    expect(getByLabelText("Email").value).toBe("");
    expect(getByLabelText("Password").value).toBe("");
    expect(getByLabelText("Name").value).toBe("");
    expect(getByTestId("submit-signup")).toBeDisabled();
  });

  describe("with password and name but invalid email field ", () => {
    it("submit should be disabled", () => {
      const { getByLabelText, getByTestId } = render(<SignUpForm />);
      const password = getByLabelText("Password");
      const email = getByLabelText("Email");
      const name = getLabelText("Name");
      userEvent.type(name, "username");
      userEvent.type(password, "123456");
      userEvent.type(email, "invalid email");
      email.blur();
      expect(getByTestId("submit-signup")).toBeDisabled();
    });

    it("email error should be displayed", () => {
      const { getByLabelText } = render(<SignUpForm />);
      const email = getByLabelText("Email");
      userEvent.type(email, "invalid");
      email.blur();
      expect(email).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("with email and name but invalid password field", () => {
    it("submit should be disabled", () => {
      const { getByLabelText, getByTestId } = render(<SignUpForm />);
      const password = getByLabelText("Password");
      const email = getByLabelText("Email");
      const name = getByLabelText("Name");
      userEvent.type(name, "username");
      userEvent.type(email, "test@test.com");
      userEvent.type(password, "123");
      password.blur();
      expect(getByTestId("submit-signup")).toBeDisabled();
    });

    it("invalid passsword error should be displayed", () => {
      const { getByLabelText } = render(<SignUpForm />);
      const password = getByLabelText("Password");
      userEvent.type(password, "invalid");
      password.blur();
      expect(password).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("with email and password but invalid name field", () => {
    it("submit should be disabled", () => {
      const { getByLabelText, getByTestId } = render(<SignUpForm />);
      const password = getByLabelText("Password");
      const email = getByLabelText("Email");
      const name = getByLabelText("Name");
      userEvent.type(email, "test@test.com");
      userEvent.type(password, "123abc");
      name.blur();
      expect(getByTestId("submit-signup")).toBeDisabled();
    });

    it("invalid name error should be displayed", () => {
      const { getByLabelText } = render(<SignUpForm />);
      const name = getByLabelText("Name");
      name.blur();
      expect(name).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("with all valid form values", () => {
    it("should not be disabled", () => {
      const { getByLabelText, getByTestId } = render(<SignUpForm />);
      const email = getByLabelText("Email");
      const password = getByLabelText("Password");
      const name = getByLabelText("Name");
      userEvent.type(email, "test@test.com");
      email.blur();
      userEvent.type(password, "abcdef");
      password.blur();
      userEvent.type(name, "username");
      expect(getByTestId("submit-signup")).not.toBeDisabled();
    });
    it.todo("it submits");
  });

  describe("when submitted encounters network/backend error", () => {
    it.todo("should diplay error message");
  });

  describe("onsuccesful signup", () => {
    it.todo("should redirect to the users profile page");
  });
});
