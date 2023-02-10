import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../redux/slices/userData.slice";

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [signupHandle, setSignupHandle] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const signupHandler = (e) => {
		setSignupHandle({ ...signupHandle, [e.target.name]: e.target.value });
	};

	const saveUserDataInDatabase = async () => {
		if (
			signupHandle.name === "" ||
			signupHandle.username === "" ||
			signupHandle.email === "" ||
			signupHandle.password === ""
		) {
			alert("Fields are empty");
		} else if (signupHandle.password !== signupHandle.confirmPassword) {
			alert("Password did not match");
		} else {
			const response = await fetch("http://127.0.0.1:4000/users/signup/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(signupHandle),
			});
			if (response.status == 200) {
				const responseData = await response.json();
				dispatch(getUserData(responseData));
				// Move user to "/dashboard"
				navigate("/dashboard/activities");
			} else if (response.status == 400) {
				const responseData = await response.json();
				alert(responseData.message);
			}
		}
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
					value={signupHandle.name}
					placeholder="Full Name"
					onChange={signupHandler}
				/>
				<br />
				<label htmlFor="username"></label>
				<input
					type="text"
					name="username"
					value={signupHandle.username}
					className="form-input rounded-md w-full h-12"
					required
					placeholder="User name"
					onChange={signupHandler}
				/>
				<br />
				<label htmlFor="email"></label>
				<input
					type="text"
					name="email"
					value={signupHandle.email}
					className="form-input rounded-md w-full h-12"
					required
					placeholder="Email"
					onChange={signupHandler}
				/>
				<br />
				<label htmlFor="password"></label>

				<input
					type="password"
					name="password"
					className="form-input rounded-md w-full h-12"
					required
					value={signupHandle.password}
					placeholder="Password"
					onChange={signupHandler}
				/>
				<br />
				<label htmlFor="confirmPassword"></label>

				<input
					type="password"
					name="confirmPassword"
					className="form-input rounded-md w-full h-12"
					onChange={signupHandler}
					required
					value={signupHandle.confirmPassword}
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
					<button
						className="px-7 w-[100%] rounded-md py-2 bg-black text-white"
						onClick={saveUserDataInDatabase}
					>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
