import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addActivityState } from "../../redux/slices/AddActivityState.slice";
import AddNewActivityCard from "./AddNewActivityCard";

const AddActivity = () => {
	var isOpen = useSelector((state) => state.addActivityModal.isOpen);
	var dispatch = useDispatch();
	return (
		<>
			<div className="h-[85vh] flex justify-center items-center">
				<div
					className="flex justify-center items-center cursor-pointer"
					onClick={() => {
						dispatch(addActivityState());
					}}
				>
					<div className="w-48 h-48 rounded-lg">
						<BsFillPlusCircleFill className="w-full h-full text-opacity-30 text-clip backdrop-blur-lg rounded-full backdrop-filter text-white" />
					</div>
				</div>
			</div>
			{isOpen && <AddNewActivityCard />}
		</>
	);
};

export default AddActivity;
