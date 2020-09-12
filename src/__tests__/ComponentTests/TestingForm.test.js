import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitForElement, wait } from "@testing-library/react";
import SignupForm from "../../components/TestingForm";

describe("Very important form", () => {
  it("submits values and fires", async () => {
    const { getByText, getByTestId } = render(
      <SignupForm/>
    );

    const input = await waitForElement(() => getByTestId("firstName"));
    const button = await waitForElement(() => getByText("Submit"));

    fireEvent.change(input, {
      target: {
        value: "Adil"
      }
    });

    fireEvent.click(button);

    wait(() => {
      expect(getByTestId("firstName")).not.toBe(null);
      expect(getByTestId("firstName")).toHaveTextContent("Required");
      expect(getByTestId("firstName")).toBe("Adil");
    });
  });
});