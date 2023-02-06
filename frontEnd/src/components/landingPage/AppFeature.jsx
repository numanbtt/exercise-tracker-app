import React from "react";
import { IoMdFitness } from "react-icons/io";
const AppFeature = () => {
	return (
		<div className="smokeBG bg-center bg-cover bg-fixed min-h-screen flex flex-col justify-center">
			<div className="bg-gradient-to-b from-black to-transparent min-h-screen bg-transparent">
				<h3 className="text-gray-600 text-4xl md:text-8xl font-extrabold text-opacity-25 text-center">
					App Features
				</h3>
				<h6 className="text-white text-5xl font-bold text-center mt-[-25px]">
					App Features
				</h6>
				<div className="flex flex-row justify-center my-10">
					<div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 w-[80%]">
						<div className="p-3 rounded-md  glassmorphism  flex items-center">
							<div className="bg-black p-3 m-3 rounded-full">
								<IoMdFitness className="text-4xl text-white" />
							</div>
							<h6 className="text-white mx-2">
								Video Tutorial for the workout steps
							</h6>
						</div>
						<div className="p-3 rounded-md  glassmorphism  flex items-center">
							<div className="bg-black p-3 m-3 rounded-full">
								<IoMdFitness className="text-4xl text-white" />
							</div>
							<h6 className="text-white mx-2">
								Video Tutorial for the workout steps
							</h6>
						</div>
						<div className="p-3 rounded-md  glassmorphism  flex items-center">
							<div className="bg-black p-3 m-3 rounded-full">
								<IoMdFitness className="text-4xl text-white" />
							</div>
							<h6 className="text-white mx-2">
								Video Tutorial for the workout steps
							</h6>
						</div>
						<div className="p-3 rounded-md  glassmorphism  flex items-center">
							<div className="bg-black p-3 m-3 rounded-full">
								<IoMdFitness className="text-4xl text-white" />
							</div>
							<h6 className="text-white mx-2">
								Video Tutorial for the workout steps
							</h6>
						</div>
						<div className="p-3 rounded-md  glassmorphism  flex items-center">
							<div className="bg-black p-3 m-3 rounded-full">
								<IoMdFitness className="text-4xl text-white" />
							</div>
							<h6 className="text-white mx-2">
								Video Tutorial for the workout steps
							</h6>
						</div>
						<div className="p-3 rounded-md  glassmorphism  flex items-center">
							<div className="bg-black p-3 m-3 rounded-full">
								<IoMdFitness className="text-4xl text-white" />
							</div>
							<h6 className="text-white mx-2">
								Video Tutorial for the workout steps
							</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppFeature;
