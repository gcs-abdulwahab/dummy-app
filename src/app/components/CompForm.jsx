"use client";
import { useState } from "react";
const CompForm = () => {
	let [post, setPost] = useState({
		title: "sample title",
        body: "sample body",
        remember : true
    });
    

	let handleSubmit = (e) => {
		e.preventDefault();
		console.log(post);
	};

	return (
		<div>
            <h1>Component Form</h1>
		


			<hr />

			<form onSubmit={handleSubmit}>
				<label htmlFor="title"> Title </label>
				<input
					id="title"
					type="text"
					placeholder="title"
					value={post.title}
					onChange={(e) => setPost({ ...post, title: e.target.value })}
				/>
				<br />
				<label htmlFor="body"> Body </label>
				<input
					id="body"
					type="text"
					placeholder="body"
					value={post.body}
					onChange={(e) => setPost({ ...post, body: e.target.value })}
                />
                <br />
                <label htmlFor="remember"> Remember Me </label>
				<input
					id="remember"
					type="checkbox"
                    checked={post.remember}
                    onChange= { e => setPost({...post , remember:e.target.checked}) }
					
                />
				<br />
				<button> Submit Data</button>
			</form>
		</div>
	);
};

export default CompForm;
