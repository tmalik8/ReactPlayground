import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitForElement, wait } from "@testing-library/react";
import SignupForm from "../../components/TestingForm";

describe("Testing Form", () => {
  it("submits values and fires", async () => {
    const { findByTestId } = render(
      <SignupForm />
    );

    const firstNameInput = await waitForElement(() => findByTestId("firstName"));
    const lastNameInput = await waitForElement(() => findByTestId("lastName"));
    const emailInput = await waitForElement(() => findByTestId("email"));
    const button = await waitForElement(() => findByTestId("Submit"));

    //change input firsName
    fireEvent.change(firstNameInput, {
      target: {
        value: "Adil"
      }
    });

    //change input LastName
    // fireEvent.change(lastNameInput, {
    //   target: {
    //     value: "Merribi"
    //   }
    // });


    //change input email
    fireEvent.change(emailInput, {
      target: {
        value: "adil@merribi"
      }
    });
    //blur field without input
    fireEvent.blur(lastNameInput);

    //submit form
    fireEvent.click(button);


    wait(() => {
      expect(firstNameInput.innerHTML).not.toBe(null);
      expect(firstNameInput.innerHTML.length).toBeLessThanOrEqual(15);
      expect(lastNameInput.innerHTML).toBeRequired();
      expect(emailInput.innerHTML).toBeInvalid();
    });
  });
});