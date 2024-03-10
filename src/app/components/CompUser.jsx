import React, { useState } from "react";
const user1 = {
	userid: 1,
	username: "abdul",
	email: "abdul@gmail.com",
	password: "123456",
	age: 25,
	gender: "male",
	favColors: ["red", "green", "blue"],

};

const CompUser = () => {
	let [user, setUser] = useState(user1);

	const handleChange = (e) => {
		console.log(e.target.value);
		setUser({
			...user,
			[e.target.id]:e.target.value
		

		});
	};

	return (
		<div>
			<h1>Comp User</h1>

			<form action="">
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" value={user.username}
					
					onChange={(e) => {
						handleChange(e);
					}}
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={user.email}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" value={user.password}
					
					onChange={(e) => {
						handleChange(e);
						}}
					
					/>
				</div>
				<div>
					<label htmlFor="age">Age</label>
					<input type="number" id="age" value={user.age}
					onChange={(e) => {
						handleChange(e);
					}}
					/>
				</div>
				<div>
					<div>
						<input
							type="radio"
							id="gender"
							name="gender"
							value="male"
							checked={user.gender === "male"}
							onChange={(e)=>{handleChange(e)}}
						/>
						<label for="male">Male</label>
						<br />
						<input
							type="radio"
							id="gender"
							name="gender"
							value="female"
							checked={user.gender === "female"}
							onChange={(e)=>{handleChange(e)}}
						/>
						<label for="female">Female</label>
						<br />
					</div>
				</div>
				
				
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default CompUser;
