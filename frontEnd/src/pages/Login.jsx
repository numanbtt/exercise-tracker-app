import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
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
					placeholder="Email or User Name"
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
				<div className="flex justify-center">
					<Link to="/dashboard">
						<button className="px-7 rounded-md py-2 bg-black text-white">
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
