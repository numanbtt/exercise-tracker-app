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
				console.log(responseData);
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
			<div className="space-y-2  lg:w-[30%] md:w-[50%] sm:w-[70%] w-[80%]">
				<img src="./blacklogo.png" alt="" className="w-16" />
				<h2 className="font-semibold text-xl font-sans">
					Enter email and Password to login
				</h2>
				<label htmlFor="email"></label>
				<input
					type="text"
					name="email"
					className="form-input rounded-md w-full h-12"
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
					className="form-input rounded-md w-full h-12"
					required
					placeholder="Password"
					onChange={loginHandler}
					value={loginHandle.password}
				/>
				<br />
				<div className="flex justify-center">
					<button
						className="px-7 rounded-md py-2 bg-black text-white"
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
