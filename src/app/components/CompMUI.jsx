import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
const CompMUI = () => {
	const label = { inputProps: { "aria-label": "Checkbox demo" } };

	return (
		<>
			<FormGroup>
				<FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
				<FormControlLabel required control={<Checkbox />} label="Required" />
				<FormControlLabel disabled control={<Checkbox />} label="Disabled" />
			</FormGroup>
		</>
	);
};

export default CompMUI;
