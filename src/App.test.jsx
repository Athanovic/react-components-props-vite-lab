import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog name", () => {
  render(<App />);
  const headerElement = screen.getByText(/My Personal Blog/i);
  expect(headerElement).toBeInTheDocument();
});
