import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const CompMLCup = () => {
	let [ml, setMl] = useState(0);
	function handleMlChange(e) {
		setMl(e.target.value);
	}
	return (
		<Box>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
				required
				value={ml}
				onChange={handleMlChange}
			/>

			<Typography variant="h1" component="h2">
				{ml / 250} Cup
			</Typography>
		</Box>
	);
};

export default CompMLCup;
