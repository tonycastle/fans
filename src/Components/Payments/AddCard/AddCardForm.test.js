import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AddCardForm from "./AddCardForm";
import { Elements } from "@stripe/react-stripe-js";
import * as mocks from "../../../testing_assets/Stripe_mocks";

describe("AddCardForm ", () => {
  //TODO this should change as we will try and populate address info from the users profile
  test.skip("should render all fields with correct default values", () => {
    let mockStripe = mocks.mockStripe();
    const { getByLabelText } = render(
      <Elements stripe={mockStripe}>
        <AddCardForm />
      </Elements>
    );
    expect(getByLabelText("Country").value).toBeUndefined();
    expect(getByLabelText("State/Province").value).toBeUndefined();
    expect(getByLabelText("Street").value).toBe("");
    expect(getByLabelText("City").value).toBe("");
    expect(getByLabelText("ZIP/Postal Code").value).toBe("");
    expect(getByLabelText("Email").value).toBe("");
    expect(getByLabelText("Name on card").value).toBe("");
    /* expect(getByLabelText("Credit Card Number")).toBeInTheDocument();
    expect(getByLabelText("Expiration Date")).toBeInTheDocument();
    expect(getByLabelText("CVC")).toBeInTheDocument(); */
    expect(getByTestId("submit-addcard")).toBeDisabled();
  });

  describe("all value are set except Country", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const testInput = getByLabelText("Country");
      userEvent.type(getByLabelText(testInput), "");
      testInput.blur();
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("Country should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("Country");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("all value are set except State/Province", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      userEvent.type(getByLabelText("Country"), "Czech Republic");
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("State/Province should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("State/Province");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("all value are set except Street", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      userEvent.type(getByLabelText("Country"), "Czech Republic");
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("Street should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("Street");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("all value are set except City", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      userEvent.type(getByLabelText("Country"), "Czech Republic");
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("City should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("City");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("all value are set except ZIP/Postal Code", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      userEvent.type(getByLabelText("Country"), "Czech Republic");
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("ZIP/Postal Code should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("ZIP/Postal Code");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("all value are set except Email", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      userEvent.type(getByLabelText("Country"), "Czech Republic");
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("Email should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("Email");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("all value are set except Name on card", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      userEvent.type(getByLabelText("Country"), "Czech Republic");
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("Name on card should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("Name on card");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("all value are set except Credit Card Number", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      userEvent.type(getByLabelText("Country"), "Czech Republic");
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("Credit Card Number should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("Credit Card Number");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("all value are set except Expiration Date", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      userEvent.type(getByLabelText("Country"), "Czech Republic");
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("Expiration Date should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("Expiration Date");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });

  describe("all value are set except CVC", () => {
    test.skip("submit should be disabled", () => {
      const { getByLabelText } = render(<AddCardForm />);
      userEvent.type(getByLabelText("Country"), "Czech Republic");
      userEvent.type(getByLabelText("State/Province"), "Prague");
      userEvent.type(getByLabelText("Street"), "Street");
      userEvent.type(getByLabelText("City"), "City");
      userEvent.type(getByLabelText("ZIP/Postal Code"), "zipcode");
      userEvent.type(getByLabelText("Email"), "test@test.com");
      userEvent.type(getByLabelText("Name on card"), "Ms. cardholder");
      userEvent.type(getByLabelText("Credit Card Number"), "12341241234124");
      userEvent.type(getByLabelText("Expiration Date"), "12/33");
      userEvent.type(getByLabelText("CVC"), "123");
      expect(getByTestId("submit-addcard")).toBeDisabled();
    });
    test.skip("CVC should diplay error message", () => {
      const { getByLabelText } = render(<AddCardForm />);
      const input = getByLabelText("CVC");
      userEvent.type(input, "");
      input.blur();
      expect(input).toHaveAttribute(
        "aria-invalid",
        expect.stringMatching("true")
      );
    });
  });
});
