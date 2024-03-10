import React, { useState } from "react";

const CompRadioList = () => {

    let options = [
    
		{ id: 1, label: "Option 1", isChecked: false },
		{ id: 2, label: "Option 2", isChecked: true },
        { id: 3, label: "Option 3", isChecked: false },
        
	];

    let [choices, setChoices] = useState(options);
    

    let changeHandler = (id) => {
        console.log('change handler' + id)
        let newChoices = choices.map((choice) => {
            if (choice.id === id) {
                return { ...choice, isChecked: true };
            }
            return { ...choice, isChecked: false };
        });
        setChoices(newChoices);
    }

	return (
		<div>
			<h1>Component Radio List </h1>
			<form>
				{choices.map(({ id, label, isChecked }) => {
					return (
						<div key={id}>
							<input
								type="radio"
								id={id}
								checked={isChecked}
								onChange={() => {
                                    changeHandler(id);
								}}
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

export default CompRadioList;
