import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("contains text Hello World", () => {
    render(<App />);

    expect(screen.findByText("Hello World"));
  });
});
