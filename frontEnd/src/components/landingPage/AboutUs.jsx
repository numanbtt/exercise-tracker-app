import React from "react";

const AboutUs = () => {
	return (
		<div className="min-h-[90vh] flex items-center bgimage">
			<div className="grid md:grid-cols-2 grid-cols-1">
				<div className="h-[65vh] p-5 w-full">
					<div className="aboutimage h-full rounded-lg"></div>
				</div>
				<div className="space-y-5 p-5 flex  flex-col justify-center items-start">
					<div className="flex space-x-2 items-center">
						<div className="w-8 h-[1.5px] bg-fuchsia-400"></div>
						<div className="text-fuchsia-400">Welcome</div>
					</div>
					<h3 className="text-2xl font-bold italic text-white">
						DEDICATED TO IGNITING YOUR PASSION FOR HEALTH
					</h3>
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
						voluptatibus, quos nemo neque odio veniam ratione sapiente dolor
						aliquam aspernatur iusto iste obcaecati quod blanditiis quae, fuga
						id magnam ad.
					</p>
					<button className="border-2 text-white hover:bg-fuchsia-800 transition duration-300 hover:scale-110 hover:border-fuchsia-800 font-semibold text-lg px-5 py-2 rounded-md border-fuchsia-500">
						Join us
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
