import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";
import DarkMode from "./components/DarkMode";
import PlayerCard from "./components/PlayerCard";

test("Renders without crashing", () => {
	rtl.render(<App />);
});

test("localStorage hook works", () => {
	window.localStorage.removeItem("dark-mode");

	const doc = rtl.render(<DarkMode />);
	const toggle = doc.getByLabelText(/dark/i);

	rtl.fireEvent.click(toggle);

	const changedValue = JSON.parse(window.localStorage.getItem("dark-mode"));
	expect(changedValue).toBe(true);
});

test("Dark Mode switching works", () => {
	const doc = rtl.render(<DarkMode />);
	const toggle = doc.getByLabelText(/theme/i);

	expect(toggle.classList).toContain("toggle");

	rtl.fireEvent.click(toggle);

	expect(toggle.classList).toContain("toggled");

	expect(toggle).toBeInTheDocument();
});

test("Chart renders data correctly", () => {
	const doc = rtl.render(
		<Chart
			data={[
				{ name: "Alex Morgan", country: "United States", searches: 100 },
				{ name: "Wendie Renard", country: "France", searches: 7 }
			]}
		/>
	);

	const name = doc.getByText("Alex Morgan");
	const country = doc.getByText("United States");
	const searches = doc.getByText("100");

	expect(name).toBeInTheDocument();
	expect(country).toBeInTheDocument();
	expect(searches).toBeInTheDocument();
});
