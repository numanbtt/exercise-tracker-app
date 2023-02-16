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
					<div className="fixed bottom-0 right-0 m-4 hidden w-fit cursor-pointer rounded-full p-2 shadow-2xl shadow-black md:block">
						<BsPlusLg
							onClick={() => dispatch(plusIconState())}
							className="w-fit rounded-full bg-white p-2 text-4xl font-light transition duration-300 hover:scale-110"
						/>
					</div>
				</div>
			) : (
				<div>
					<div className="glassmorphism fixed top-0 left-0 bottom-0 right-0 h-screen bg-opacity-40">
						<div className="h-screen">
							<div className="fixed top-0 left-0 bottom-0 right-0 flex h-screen flex-row items-center justify-center">
								<div className="grid w-[60vw] grid-cols-2 gap-10">
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
							<div className="fixed bottom-0 right-0 m-4 w-fit cursor-pointer rounded-full p-2 shadow-2xl shadow-black">
								<RxCross1
									onClick={() => dispatch(plusIconState())}
									className="w-fit rounded-full bg-white p-2 text-4xl font-extrabold transition duration-300 hover:scale-110"
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
