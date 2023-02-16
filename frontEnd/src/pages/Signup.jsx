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
				alert(responseData.message);
				// dispatch(getUserData(responseData));
				// Move user to "/dashboard"
				navigate("/login");
			} else if (response.status == 400) {
				const responseData = await response.json();
				alert(responseData.message);
			}
		}
	};

	return (
		<div className="flex h-screen items-center justify-center">
			<div className="w-[80%] space-y-2 sm:w-[70%] md:w-[50%] lg:w-[30%]">
				<img src="./blacklogo.png" alt="" className="w-16" />
				<h2 className="font-sans text-xl font-semibold">
					Enter email and Password to Sign up
				</h2>
				<label htmlFor="name"></label>
				<input
					type="text"
					name="name"
					className="form-input h-12 w-full rounded-md"
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
					className="form-input h-12 w-full rounded-md"
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
					className="form-input h-12 w-full rounded-md"
					required
					placeholder="Email"
					onChange={signupHandler}
				/>
				<br />
				<label htmlFor="password"></label>

				<input
					type="password"
					name="password"
					className="form-input h-12 w-full rounded-md"
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
					className="form-input h-12 w-full rounded-md"
					onChange={signupHandler}
					required
					value={signupHandle.confirmPassword}
					placeholder="Confirm Password"
				/>
				<br />
				<h2>
					By continuing, I agree to Fitlab’s{" "}
					<a className="cursor-pointer underline underline-offset-2">
						Privacy Policy
					</a>{" "}
					and{" "}
					<a className="cursor-pointer underline underline-offset-2">
						Terms of Use
					</a>
					.
				</h2>
				<div className="flex w-[100%] justify-center">
					<button
						className="w-[100%] rounded-md bg-black px-7 py-2 text-white"
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
