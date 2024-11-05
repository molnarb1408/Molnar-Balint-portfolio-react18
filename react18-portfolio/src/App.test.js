import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App"; // Az App komponenst importáld

jest.mock("lottie-react", () => {
  return function MockLottie(props) {
    return <div>{props.children}</div>; // Visszaad egy egyszerű div-et
  };
});

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: dark)",
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('renders without crashing', () => {
  render(<App />);
  // Ellenőrzés...
});

