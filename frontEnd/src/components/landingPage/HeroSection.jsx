import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<div className="h-screen">
			<div className="h-full bg-[url('./public/athlete.jpg')] bg-cover bg-right-top md:bg-center">
				<div className="h-full bg-black bg-transparent bg-gradient-to-t from-black to-transparent">
					<div className="flex h-full flex-col justify-center bg-black bg-transparent bg-gradient-to-r from-black to-transparent">
						<h1 className="p-5 text-4xl font-extrabold text-white sm:text-6xl md:text-7xl lg:text-8xl">
							HARDER
							<br />
							BETTER
							<br />
							FASTER
							<br />
							STRONGER
						</h1>
						<div className="flex items-center">
							<Link to="/login">
								<button className="mx-5 rounded-md border-2 border-fuchsia-500 px-5 py-2 text-lg font-semibold text-white transition duration-300 hover:scale-110 hover:border-fuchsia-800 hover:bg-fuchsia-800">
									Get Started
								</button>
							</Link>
							<div className="h-[1.5px] w-12 rounded-lg bg-white"></div>
							<h6 className=" mx-2 font-semibold text-white">100% Free</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
