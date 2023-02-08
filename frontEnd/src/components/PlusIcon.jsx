import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import WeightCard from "./WeightCard";
import ActivityCard from "./ActivityCard";
import { useDispatch, useSelector } from "react-redux";
import { addActivityState } from "../redux/slices/AddActivityState.slice";
import AddNewActivityCard from "./dashboard/AddNewActivityCard";
import { plusIconState } from "../redux/slices/PlusIconState.slice";

const PlusIcon = () => {
	// To check whether Add new card option is open or not
	var isOpen = useSelector((state) => state.addActivityModal.isOpen);
	var plusIcon = useSelector((state) => state.plusIcon.plusIcon);
	var dispatch = useDispatch();

	return (
		<>
			{!plusIcon ? (
				<div>
					<div className="rounded-full shadow-black shadow-2xl w-fit cursor-pointer p-2 fixed bottom-0 right-0 m-4">
						<BsPlusLg
							onClick={() => dispatch(plusIconState())}
							className="font-light text-4xl rounded-full bg-white p-2 w-fit hover:scale-110 duration-300 transition"
						/>
					</div>
				</div>
			) : (
				<div>
					<div className="fixed top-0 left-0 bottom-0 right-0 h-screen glassmorphism bg-opacity-40">
						<div className="h-screen">
							<div className="h-screen flex flex-row justify-center items-center fixed top-0 left-0 bottom-0 right-0">
								<div className="grid grid-cols-2 gap-10 w-[60vw]">
									<div
										onClick={() => {
											dispatch(plusIconState());
											dispatch(addActivityState());
										}}
									>
										<WeightCard />
									</div>
									<div
										onClick={() => {
											dispatch(plusIconState());
											dispatch(addActivityState());
										}}
									>
										<ActivityCard />
									</div>
								</div>
							</div>
							<div className="rounded-full shadow-black shadow-2xl w-fit cursor-pointer p-2 fixed bottom-0 right-0 m-4">
								<RxCross1
									onClick={() => dispatch(plusIconState())}
									className="font-extrabold text-4xl rounded-full bg-white p-2 w-fit hover:scale-110 duration-300 transition"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
			{isOpen && <AddNewActivityCard />}
		</>
	);
};

export default PlusIcon;
