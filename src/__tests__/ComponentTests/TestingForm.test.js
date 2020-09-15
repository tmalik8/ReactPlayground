import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitForElement, wait } from "@testing-library/react";
import SignupForm from "../../components/TestingForm";

describe("Very important form", () => {
  it("submits values and fires", async () => {
    const { findByTestId } = render(
      <SignupForm />
    );

    const firstNameInput = await waitForElement(() => findByTestId("firstName"));
    const lastNameInput = await waitForElement(() => findByTestId("lastName"));
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

    //blur field without input
    fireEvent.blur(lastNameInput);

    //submit form
    fireEvent.click(button);


    wait(() => {
      expect(firstNameInput.innerHTML).not.toBe(null).toBe("Adil");
      expect(lastNameInput.innerHTML).toHaveTextContent("Required");
    });
  });
});