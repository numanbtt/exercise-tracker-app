import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
	const [signupHandle, setSignupHandle] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});
	const signupHandler = (e) => {
		setSignupHandle({ ...signupHandle, [e.target.name]: e.target.value });
	};
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="space-y-2 lg:w-[30%] md:w-[50%] sm:w-[70%] w-[80%]">
				<img src="./blacklogo.png" alt="" className="w-16" />
				<h2 className="font-semibold text-xl font-sans">
					Enter email and Password to Sign up
				</h2>
				<label htmlFor="name"></label>
				<input
					type="text"
					name="name"
					className="form-input rounded-md w-full h-12"
					required
					placeholder="Full Name"
				/>
				<br />
				<label htmlFor="username"></label>
				<input
					type="text"
					name="username"
					className="form-input rounded-md w-full h-12"
					required
					placeholder="User name"
				/>
				<br />
				<label htmlFor="email"></label>
				<input
					type="text"
					name="email"
					className="form-input rounded-md w-full h-12"
					required
					placeholder="Email"
				/>
				<br />
				<label htmlFor="password"></label>

				<input
					type="text"
					name="password"
					className="form-input rounded-md w-full h-12"
					required
					placeholder="Password"
				/>
				<br />
				<label htmlFor="confirmPassword"></label>

				<input
					type="text"
					name="confirmPassword"
					className="form-input rounded-md w-full h-12"
					required
					placeholder="Confirm Password"
				/>
				<br />
				<h2>
					By continuing, I agree to Fitlab’s{" "}
					<a className="underline underline-offset-2 cursor-pointer">
						Privacy Policy
					</a>{" "}
					and{" "}
					<a className="underline underline-offset-2 cursor-pointer">
						Terms of Use
					</a>
					.
				</h2>
				<div className="flex justify-center w-[100%]">
					<Link to="/dashboard">
						<button className="px-7 w-[100%] rounded-md py-2 bg-black text-white">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
