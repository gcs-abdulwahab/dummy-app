import React, { useState } from "react";

const CompSubjects = () => {
	let Subjects = [
		{ id: 1, label: "Maths", isChecked: false },
		{ id: 2, label: "Science", isChecked: true },
		{ id: 3, label: "English", isChecked: false },
	];

	//  make state of subjects   and alias it as choices
	let [choices, setChoices] = useState(Subjects);

	let changeHandler = (id) => {
		let newChoices = choices.map(( choice ) => {
			if (choice.id === id) {
				return { ...choice, isChecked: !choice.isChecked };
            }
            return choice
		});
		setChoices(newChoices);
	};

	return (
		<div>
			<h1>CheckBox Subjects Comp Subjects </h1>

			<form action="">
				{choices.map(({ id, label, isChecked }) => {
					return (
						<div key={id}>
							<input
								id={`choice-${id}`}
								type="checkbox"
								checked={isChecked}
								onChange={() => {
									changeHandler(id);
								}}
							/>
							<label htmlFor={`choice-${id}`}>{label}</label>
							<br />
						</div>
					);
				})}

				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default CompSubjects;
