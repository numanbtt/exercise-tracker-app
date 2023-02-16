import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../redux/slices/userData.slice";
const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loginHandle, setLoginHandle] = useState({
		email: "",
		password: "",
	});
	const loginHandler = (e) => {
		setLoginHandle({ ...loginHandle, [e.target.name]: e.target.value });
	};
	const checkUserLoginDetails = async () => {
		if (loginHandle.email === "" || loginHandle.password === "") {
			alert("Fields are empty");
		} else {
			const response = await fetch("http://127.0.0.1:4000/users/login/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(loginHandle),
			});
			if (response.status == 200) {
				const responseData = await response.json();
				// console.log(responseData.accessToken);
				// console.log(responseData.id);
				// console.log(responseData.name);
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
		<div className="flex h-screen items-center justify-center">
			<div className="w-[80%]  space-y-2 sm:w-[70%] md:w-[50%] lg:w-[30%]">
				<img src="./blacklogo.png" alt="" className="w-16" />
				<h2 className="font-sans text-xl font-semibold">
					Enter email and Password to login
				</h2>
				<label htmlFor="email"></label>
				<input
					type="text"
					name="email"
					className="form-input h-12 w-full rounded-md"
					required
					placeholder="Email"
					onChange={loginHandler}
					value={loginHandle.email}
				/>
				<br />
				<label htmlFor="password"></label>

				<input
					type="password"
					name="password"
					className="form-input h-12 w-full rounded-md"
					required
					placeholder="Password"
					onChange={loginHandler}
					value={loginHandle.password}
				/>
				<br />
				<div className="flex justify-center">
					<button
						className="rounded-md bg-black px-7 py-2 text-white"
						onClick={checkUserLoginDetails}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
