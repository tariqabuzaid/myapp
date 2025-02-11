import { render, screen } from "@testing-library/react";
import App from "./App";
import { Button } from "./Button";

describe("App", () => {
	it("renders with the correct label", () => {
		render(<Button label="Click me" />);
		const buttonElement = screen.getByText(/Click me/i);
		expect(buttonElement).toBeInTheDocument();
	});

	it("renders the heading and button", () => {
		render(<App />);

		// Check if the heading "Hello" is in the document
		const heading = screen.getByText(/Hello/i);
		expect(heading).toBeInTheDocument();

		// Check if the button with label "Click me" is in the document
		const button = screen.getByText(/Click me2/i);
		expect(button).toBeInTheDocument();
	});
});
