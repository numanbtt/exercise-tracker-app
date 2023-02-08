import React from "react";

const ActivityCard = () => {
	return (
		<div className="h-[60vh] shadow-2xl bg-white rounded-lg cursor-pointer hover:scale-110 transition duration-300">
			<div>
				<img src="../../workout.jpg" alt="" className="rounded-t-lg" />
				<div className="flex justify-center items-center">
					<h1 className="font-bold font-sans text-xl p-2 text-center">
						Add Exercise/Activity to Track Progress
					</h1>
				</div>
			</div>
		</div>
	);
};

export default ActivityCard;
