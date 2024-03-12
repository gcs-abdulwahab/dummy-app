import Button from "@mui/material/Button";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import WapdaRates from "./WapdaRates";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const unitRate = [
	{
		unit: 100,
		rate: 10,
	},
	{
		unit: 200,
		rate: 20,
	},
	{
		unit: 300,
		rate: 30,
	},
	{
		unit: 400,
		rate: 40,
	},
	{
		unit: 500,
		rate: 50,
	},
	{
		unit: 600,
		rate: 60,
	},
];
const Wapda = () => {
	let [units, setUnits] = useState(1);

	const calculateAmount = () => {
		let amount = 0;
		// sort the unitRate array in descending order
		unitRate.sort((a, b) => b.unit - a.unit);
		// loop through the unitRate array and calculate the amount
		for (let i = 0; i < unitRate.length; i++) {
			if (units >= unitRate[i].unit) {
				amount = units * unitRate[i].rate;
				return amount;
			}
			// units are less than minimum unit
			if (i === unitRate.length - 1) {
				amount = units * unitRate[i].rate;
				return amount;
			}
		}
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "row", width: "500px" }}>
			<h1>Wapda Component</h1>

			<Box>
				<TextField
					id="outlined-basic"
					value={units}
					label="Outlined"
					variant="outlined"
					onChange={(e) => {
						setUnits(e.target.value);
					}}
					sx={{ m: 1, width: "25ch" }}
				/>

				<h2>Units: {units}</h2>
				<hr />
				<h2>Amount: {calculateAmount()}</h2>
			</Box>

			<Box sx={{ display: "flex", width: "200px" }}>
				<WapdaRates rates={unitRate} />
			</Box>
		</Box>
	);
};

export default Wapda;
