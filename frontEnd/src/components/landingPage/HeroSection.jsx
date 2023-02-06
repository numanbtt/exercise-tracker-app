import React from "react";

const HeroSection = () => {
	return (
		<div className="h-screen">
			<div className="h-full athletebg bg-cover bg-right-top md:bg-center">
				<div className="h-full bg-black bg-transparent bg-gradient-to-t from-black to-transparent">
					<div className="h-full bg-black bg-transparent bg-gradient-to-r from-black to-transparent flex flex-col justify-center">
						<h1 className="lg:text-8xl md:text-7xl text-6xl text-white p-5 font-extrabold">
							HARDER
							<br />
							BETTER
							<br />
							FASTER
							<br />
							STRONGER
						</h1>
						<div className="flex items-center">
							<button className="border-2 text-white hover:bg-fuchsia-800 transition duration-300 hover:scale-110 hover:border-fuchsia-800 font-semibold text-lg px-5 py-2 rounded-md mx-5 border-fuchsia-500">
								Get Started
							</button>
							<div className="w-12 h-[1.5px] rounded-lg bg-white"></div>
							<h6 className=" text-white mx-2 font-semibold">100% Free</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
