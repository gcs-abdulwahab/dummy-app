import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const MinFarenheit = 94;
const MaxFarenheit = 106;

const TemperatureConverter = () => {
	let [temp, setTemp] = useState(MinFarenheit);

	return (
		<div>
			<h1>Temperature Converter</h1>

			<Box sx={{ width: 250 }}>
				<Typography id="discrete-slider" gutterBottom>
					Temperature in Farenheit
				</Typography>
				<Slider
					aria-label="Temperature in Farenheit"
					defaultValue={0}
					value={temp}
					onChange={(e, value) => setTemp(value)}
                    step={1}
                    valueLabelDisplay="on"
					min={MinFarenheit}
					max={MaxFarenheit}
				/>
				<Typography gutterBottom>
					Temperature in Celsius : {Math.round(((temp - 32) * 5) / 9)}
				</Typography>
			</Box>
		</div>
	);
};

export default TemperatureConverter;
