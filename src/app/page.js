"use client";
import TemperatureConverter from "./components/TemperatureConverter";
import "./globals.css";

export default function Home() {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div>
				
				<TemperatureConverter />
			</div>
		</div>
	);
}
