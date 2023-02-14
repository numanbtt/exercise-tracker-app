import React, { useState } from "react";
import BMIDetails from "./BMIDetails";

const BMICalculator = () => {
	const [bmi, setBmi] = useState(0);
	const [handle, setHandle] = useState({ weight: 0, fts: 0, inches: 0 });

	const handler = (e) => {
		setHandle({ ...handle, [e.target.name]: e.target.value });
		console.log(handle);
	};
	const calculateBMI = () => {
		console.log("fts", handle.fts);
		console.log("inches", handle.inches);
		var height = 12 * +handle.fts;
		var height = height + +handle.inches;
		const calculatedBmi = ((handle.weight * 2.2) / (height * height)) * 703;
		setBmi(calculatedBmi.toFixed(2));
	};

	return (
		<div className="custom-scrollbar my-2 h-[80vh] overflow-y-scroll p-5">
			<div>
				<p className="leading-10">
					The Body Mass Index (BMI) Calculator can be used to calculate BMI
					value and corresponding weight status while taking age into
					consideration.
				</p>
			</div>
			<div className="my-3 grid grid-cols-10 gap-5 rounded-lg bg-violet-500 p-5 text-white shadow-2xl shadow-white">
				<div className="col-span-7 space-y-2">
					<h1 className="text-lg font-semibold underline underline-offset-4">
						BMI Calculator
					</h1>
					<div className="grid grid-cols-9 gap-2">
						<label className="col-span-2">Height (inches):</label>
						<div className="col-span-7">
							<div className="grid grid-cols-10">
								<input
									type="number"
									className="col-span-4 rounded-lg text-violet-600"
									value={handle.fts}
									name="fts"
									onChange={handler}
								/>
								<div className="col-span-1 flex items-center justify-center p-1">
									<label>(ft)</label>
								</div>
								<input
									type="number"
									className="col-span-4 rounded-lg text-violet-600"
									value={handle.inches}
									name="inches"
									onChange={handler}
								/>
								<div className="col-span-1 flex items-center justify-center p-1">
									<label>(inch)</label>
								</div>
							</div>
						</div>
					</div>
					<div className=" grid grid-cols-9 gap-2">
						<label className="col-span-2">Weight (kg):</label>
						<input
							type="number"
							className="col-span-7 rounded-lg text-violet-600"
							name="weight"
							value={handle.weight}
							onChange={handler}
						/>
					</div>
					<div className="flex w-full justify-center">
						<button
							onClick={calculateBMI}
							className="cursor-pointer rounded-lg bg-white px-5 py-2 font-semibold text-black transition duration-300 hover:scale-105"
						>
							Calculate BMI
						</button>
					</div>
				</div>
				<div className="col-span-3">
					<h1 className="text-lg font-semibold underline underline-offset-4">
						Results:
					</h1>
					<div>BMI: {bmi}</div>
				</div>
			</div>
			<BMIDetails />
		</div>
	);
};

export default BMICalculator;
