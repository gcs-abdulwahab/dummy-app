"use client";

import Wapda from "./components/Wapda/Wapda";
import WapdaRates from "./components/Wapda/WapdaRates";

import "./globals.css";

export default function Home() {
	return (

		<div style={{ display: "flex", justifyContent: "center" }}>
			<div>
				{/* <Wapda />
				<WapdaRates /> */}
				{/*  make the above two components go side by side */}
				<div style={{ display: "flex" , justifyContent:"space-between" }}>
					
					<Wapda />
				</div>
			</div>


		</div>
	);
}
