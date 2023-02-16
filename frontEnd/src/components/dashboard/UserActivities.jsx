import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineTable } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { addActivityState } from "../../redux/slices/AddActivityState.slice";
import AddNewActivityCard from "./AddNewActivityCard";
import { setUpdateState } from "../../redux/slices/userActivityUpdate.slice";

const UserActivities = () => {
	var isOpen = useSelector((state) => state.addActivityModal.isOpen);
	var userID = useSelector((state) => state.userData.userID);
	// var accessToken = useSelector((state) => state.userData.accessToken);
	var isUpdating = useSelector(
		(state) => state.isUpdating.userActivityUpdateID
	);
	var dispatch = useDispatch();

	const [userActivities, setUserActivities] = useState([]);

	// const getUserActivities = async (userID) => {
	// 	const data1 = await fetch(
	// 		`http://127.0.0.1:4000/useractivities/${userID}`
	// 		// , {
	// 		// 	headers: { "auth-token": `bearer ${accessToken}` },
	// 		// }
	// 	);
	// 	const data = await data1.json();
	// 	setUserActivities(data);
	// };

	const getUserActivities = () => {
		fetch(`http://127.0.0.1:4000/useractivities/${userID}`)
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				setUserActivities(data);
			});
	};

	const deleteUserActivities = async (id) => {
		await fetch(`http://127.0.0.1:4000/useractivities/${id}`, {
			method: "Delete",
		});
		getUserActivities();
	};

	useEffect(() => {
		getUserActivities();
	}, [userID]);

	return (
		<>
			<div className="m-2 flex items-center justify-center space-x-5 px-2 md:justify-end">
				<div className="flex items-center justify-center space-x-3 ">
					{/* <div>
						<BsFillGrid3X3GapFill className="text-white text-xl" />
					</div> */}
					<div>
						<AiOutlineTable className="text-2xl text-white" />
					</div>
				</div>
				<div
					className="cursor-pointer rounded-lg bg-white px-5 py-2 font-semibold text-black transition duration-300 hover:scale-105"
					onClick={() => {
						getUserActivities();
						dispatch(addActivityState());
					}}
				>
					Add Activity
				</div>
			</div>
			<div className=" custom-scrollbar my-2 max-h-[65vh] overflow-y-scroll">
				<div className=" flex w-full flex-row  justify-start md:justify-center">
					<table className="glassmorphism my-2 max-h-[72vh]  bg-opacity-60">
						<thead className="sticky top-0 bg-white bg-opacity-80 font-sans text-black">
							<tr className="bg-white bg-opacity-80 font-sans text-black">
								<th className="px-5 py-2 text-center">Activity</th>
								<th className="px-5 py-2 text-center">Start Time</th>
								<th className="px-5 py-2 text-center">Duration</th>
								<th className="px-5 py-2 text-center">Date</th>
								<th className="px-5 py-2 text-center">Calories Burn</th>
								<th className="px-5 py-2 text-center">Edit/Delete</th>
							</tr>
						</thead>
						<tbody>
							{userActivities.map((element, index) => {
								let date = new Date(element.date);
								let dateString = date.toLocaleDateString("default", {
									day: "numeric",
									month: "short",
									year: "numeric",
								});
								return (
									<tr key={index} className=" text-gray-700">
										<td className="px-5 py-2 text-center">
											{element.activity}
										</td>
										<td className="px-5 py-2 text-center">
											{element.startTime}
										</td>
										<td className="px-5 py-2 text-center">
											{element.duration}
										</td>
										<td className="px-5 py-2 text-center">{dateString}</td>
										<td className="px-5 py-2 text-center">
											{element.duration}
										</td>
										<td className="flex h-full items-center justify-center space-x-5 px-5 py-2">
											<AiOutlineEdit
												onClick={() => {
													console.log("clicked");
													dispatch(setUpdateState(`${element._id}`));
												}}
												className="cursor-pointer text-black transition duration-300 hover:scale-110"
											/>
											<AiOutlineDelete
												className="cursor-pointer text-black transition duration-300 hover:scale-110"
												onClick={() => {
													deleteUserActivities(element._id);
												}}
											/>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				{isOpen && <AddNewActivityCard />}
				{isUpdating && <AddNewActivityCard />}
			</div>
		</>
	);
};

export default UserActivities;
