"use client";
import { useState } from "react";

const CompCheckBoxList = () => {
	const initialCheckboxes = [
		{ id: 1, label: "Option 1", isChecked: false },
		{ id: 2, label: "Option 2", isChecked: true },
		{ id: 3, label: "Option 3", isChecked: false },
	];
	const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

	let onSubmitHandler = (e) => {
		e.preventDefault();
		console.log("onSubmit Hander");
		console.log(checkboxes)
	};

	let handleChange = (id) => {
		let newCheckboxes = checkboxes.map((checkbox) => {
			if (checkbox.id === id) {
				return { ...checkbox, isChecked: !checkbox.isChecked };
			}
			return checkbox;
		});
		setCheckboxes(newCheckboxes);

	};

	return (
		<div>
			<h1> CheckBox List </h1>
			
			<form onSubmit={onSubmitHandler}>
				{checkboxes.map(({ id, label, isChecked }) => {
					return (
						<div key={id}>
							<input
								type="checkbox"
								id={id}
								checked={isChecked}
								onChange={() => handleChange(id)}
							/>
							<label htmlFor={id}> {label} </label>
						</div>
					);
					
					
				})}

				<button type="submit">Submit </button>
			</form>
		</div>
	);
};

export default CompCheckBoxList;
