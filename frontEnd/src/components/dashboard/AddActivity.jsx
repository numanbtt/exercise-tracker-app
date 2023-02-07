import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const AddActivity = () => {
	return (
		<div className="flex justify-center items-center cursor-pointer">
			<div className="w-48 h-48 rounded-lg">
				<BsFillPlusCircleFill className="w-full h-full text-opacity-30 text-clip backdrop-blur-lg rounded-full backdrop-filter text-white" />
			</div>
		</div>
	);
};

export default AddActivity;
