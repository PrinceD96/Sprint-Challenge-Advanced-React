import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";
import DarkMode from "./components/DarkMode";

test("Renders without crashing", () => {
	rtl.render(<App />);
});

test("localStorage hook works", () => {
	window.localStorage.removeItem("dark-mode");

	const doc = rtl.render(<Theme />);
	const toggle = doc.getByLabelText(/theme/i);

	rtl.fireEvent.click(toggle);

	const changedValue = JSON.parse(window.localStorage.getItem("dark-mode"));
	expect(changedValue).toBe(true);
});

test("Dark Mode switching works", () => {
	const doc = rtl.render(<Theme />);
	const toggle = doc.getByLabelText(/theme/i);

	expect(toggle.classList).toContain("toggle");

	rtl.fireEvent.click(toggle);

	expect(toggle.classList).toContain("toggled");

	expect(toggle).toBeInTheDocument();
});
