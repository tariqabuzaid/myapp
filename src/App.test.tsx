// src/components/Hello.test.tsx
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Hello component", () => {
	render(<App />);

	// Check if the text "Hello, World!" is in the document
	expect(screen.getByText("Hello")).toBeInTheDocument();
});
