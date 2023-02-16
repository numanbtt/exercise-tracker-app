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
				<h1 className="text-2xl font-semibold underline underline-offset-4">
					BMI introduction
				</h1>
				<p className="leading-10">
					The Body Mass Index (BMI) Calculator can be used to calculate BMI
					value and corresponding weight.
				</p>
			</div>
			<div className="glassmorphism my-3 grid grid-cols-1 gap-5 rounded-lg bg-violet-700 bg-opacity-80 p-5 text-white shadow-inner shadow-violet-500  lg:grid-cols-10">
				<div className="col-span-1 space-y-2 p-5 lg:col-span-7">
					<h1 className="text-lg font-semibold underline underline-offset-4">
						BMI Calculator
					</h1>
					<div className="grid grid-cols-9 gap-2">
						<div className="col-span-2 flex items-center">
							<label>Height:</label>
						</div>
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
						<div className="col-span-2 flex items-center">
							<label>Weight (kg):</label>
						</div>
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
					<div className="flex space-x-5">
						<h1 className="text-lg font-semibold underline underline-offset-4">
							Results:
						</h1>
						<div className="text-lg font-semibold underline underline-offset-4">
							BMI: {bmi}
						</div>
					</div>
				</div>
				<div className="col-span-1 flex items-center justify-center p-2 lg:col-span-3">
					<div>
						<ul className="list-disc">
							<li>
								Healthy BMI range: 18.5 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup>
							</li>
							<li>Healthy weight for the height: 128.9 lbs - 174.2 lbs</li>
							<li>
								Lose 45.8 lbs to reach a BMI of 25 kg/m<sup>2</sup>.
							</li>
							<li>
								Ponderal Index: 17.8 kg/m<sup>3</sup>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<BMIDetails />
		</div>
	);
};

export default BMICalculator;
