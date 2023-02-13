import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addActivityState } from "../../redux/slices/AddActivityState.slice";
import { setUpdateState } from "../../redux/slices/userActivityUpdate.slice";

const AddNewActivityCard = () => {
	// To check whether Add new card option is open or not
	var isOpen = useSelector((state) => state.addActivityModal.isOpen);
	var userID = useSelector((state) => state.userData.userID);
	var isUpdating = useSelector((state) => state.isUpdating.isUpdatingState);
	var userActivityUpdateID = useSelector(
		(state) => state.isUpdating.userActivityUpdateID
	);
	const dispatch = useDispatch();

	// activityOptions are coming from MongoDB Database (Collection: Activity)
	const [activityOptions, setActivityOptions] = useState([]);

	const fetchActivities = async () => {
		var response = await fetch("http://localhost:4000/activities");
		response = await response.json();
		setActivityOptions(response);
	};

	// Get data from the inputs
	const [handle, setHandle] = useState({
		activity: "Aerobics",
		startTime: "12:00",
		duration: 30,
		date: new Date().toISOString().substr(0, 10),
		// date: new Date().toLocaleString().substr(0, 10),
		// date: new Date().toDateString(),
	});
	const handler = (e) => {
		setHandle({ ...handle, [e.target.name]: e.target.value });
		// console.table(handle);
	};

	// Send and Save Data into Redux State
	const saveActivity = async () => {
		dispatch(addActivityState());
		await fetch(`http://127.0.0.1:4000/useractivities/${userID}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(handle),
		});
	};

	// Get data for update condition and save it in state
	const getUpdateActivity = async () => {
		var data = await fetch(
			`http://127.0.0.1:4000/useractivities/activity/${userActivityUpdateID}`
		);
		data = await data.json();
		handle.activity = data.activity;
		handle.startTime = data.startTime;
		handle.duration = data.duration;
		let dateString = new Date(data.date);
		handle.date = dateString.toISOString().substr(0, 10);
	};

	// Update Activity in Database
	const updateActivity = async () => {
		console.log(handle);
		await fetch(
			`http://127.0.0.1:4000/useractivities/${userActivityUpdateID}`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(handle),
			}
		);
	};

	useEffect(() => {
		// console.log(isUpdating);
		getUpdateActivity();
		fetchActivities();
	}, [isOpen]);

	return (
		<>
			{/* {isOpen && ( */}
			<div>
				<div className="h-full">
					<div className="fixed top-0 left-0 bottom-0 right-0 h-screen glassmorphism bg-opacity-40">
						<div className="h-full  flex flex-row justify-center items-center fixed top-0 left-0 bottom-0 right-0">
							<div className="min-h-[80vh] w-[30vw] bg-white shadow-2xl rounded-lg">
								<div>
									<img
										src="../../mma.jpg"
										alt=""
										className="object-cover object-center rounded-t-lg"
									/>
								</div>
								<div className="py-2 px-5 flex justify-between items-center">
									<h1 className="font-semibold">Select Activity</h1>
									<select
										className="w-48 rounded-sm"
										onChange={handler}
										value={handle.activity}
										name="activity"
									>
										{activityOptions.map((element) => (
											<option
												className="bg-black hover:bg-blue-700 p-1 glassmorphism bg-opacity-75 rounded-md text-white"
												key={element._id}
												value={element.activity}
											>
												{element.activity}
											</option>
										))}
									</select>
								</div>
								<hr />
								<div className="py-2 px-5 flex justify-between items-center">
									<h1 className="font-semibold">Start Time</h1>
									<input
										type="time"
										className="w-48 rounded-sm"
										placeholder="minutes"
										onChange={handler}
										name="startTime"
										value={handle.startTime}
									/>
								</div>
								<div className="py-2 px-5 flex justify-between items-center">
									<div>
										<h1 className="font-semibold text-center">Duration</h1>
										<h1 className="text-sm text-center">(minutes)</h1>
									</div>
									<input
										type="number"
										className="w-48 rounded-sm"
										placeholder="minutes"
										onChange={handler}
										name="duration"
										value={handle.duration}
									/>
								</div>
								<hr />
								<div className="py-2 px-5 flex justify-between items-center">
									<h1 className="font-semibold">Date</h1>
									<input
										type="date"
										className="w-48 rounded-sm"
										placeholder="minutes"
										onChange={handler}
										name="date"
										value={handle.date}
									/>
								</div>
								{isOpen ? (
									<div className="flex justify-center items-center space-x-5 my-2 mb-4">
										<button
											className="rounded-md text-lg py-2 px-5 text-center hover:scale-105 transition duration-300 border-2 border-black bg-black text-white"
											onClick={() => {
												handle.date === "" || handle.startTime === ""
													? alert("Enter Complete Data")
													: saveActivity();
											}}
										>
											Add Activity
										</button>
										<button
											className="rounded-md text-lg py-2 px-5 text-center hover:scale-105 transition duration-300 border-black text-black border-2"
											onClick={() => {
												dispatch(addActivityState());
											}}
										>
											Cancel
										</button>
									</div>
								) : (
									<div className="flex justify-center items-center space-x-5 my-2 mb-4">
										<button
											className="rounded-md text-lg py-2 px-5 text-center hover:scale-105 transition duration-300 border-2 border-black bg-black text-white"
											onClick={() => {
												handle.date === "" || handle.startTime === ""
													? alert("Enter Complete Data")
													: updateActivity();
												dispatch(setUpdateState());
												console.log("clicked");
											}}
										>
											Update Activity
										</button>
										<button
											className="rounded-md text-lg py-2 px-5 text-center hover:scale-105 transition duration-300 border-black text-black border-2"
											onClick={() => {
												// dispatch(addActivityState());
												dispatch(setUpdateState());
											}}
										>
											Cancel
										</button>
									</div>
								)}
								{/* <div className="flex justify-center items-center space-x-5 my-2 mb-4">
										<button
											className="rounded-md text-lg py-2 px-5 text-center hover:scale-105 transition duration-300 border-2 border-black bg-black text-white"
											onClick={() => {
												handle.date === "" || handle.startTime === ""
													? alert("Enter Complete Data")
													: saveActivity();
											}}
										>
											Add Activity
										</button>
										<button
											className="rounded-md text-lg py-2 px-5 text-center hover:scale-105 transition duration-300 border-black text-black border-2"
											onClick={() => {
												dispatch(addActivityState());
											}}
										>
											Cancel
										</button>
									</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* )} */}
			{/* To Update Data */}
			{/* {isUpdating && (
				<div>
					<div className="h-full">
						<div className="fixed top-0 left-0 bottom-0 right-0 h-screen glassmorphism bg-opacity-40">
							<div className="h-full  flex flex-row justify-center items-center fixed top-0 left-0 bottom-0 right-0">
								<div className="min-h-[80vh] w-[30vw] bg-white shadow-2xl rounded-lg">
									<div>
										<img
											src="../../mma.jpg"
											alt=""
											className="object-cover object-center rounded-t-lg"
										/>
									</div>
									<div className="py-2 px-5 flex justify-between items-center">
										<h1 className="font-semibold">Select Activity</h1>
										<select
											className="w-48 rounded-sm"
											onChange={handler}
											value={handle.activity}
											name="activity"
										>
											{activityOptions.map((element) => (
												<option
													className="bg-black hover:bg-blue-700 p-1 glassmorphism bg-opacity-75 rounded-md text-white"
													key={element._id}
													value={element.activity}
												>
													{element.activity}
												</option>
											))}
										</select>
									</div>
									<hr />
									<div className="py-2 px-5 flex justify-between items-center">
										<h1 className="font-semibold">Start Time</h1>
										<input
											type="time"
											className="w-48 rounded-sm"
											placeholder="minutes"
											onChange={handler}
											name="startTime"
											value={handle.startTime}
										/>
									</div>
									<div className="py-2 px-5 flex justify-between items-center">
										<div>
											<h1 className="font-semibold text-center">Duration</h1>
											<h1 className="text-sm text-center">(minutes)</h1>
										</div>
										<input
											type="number"
											className="w-48 rounded-sm"
											placeholder="minutes"
											onChange={handler}
											name="duration"
											value={handle.duration}
										/>
									</div>
									<hr />
									<div className="py-2 px-5 flex justify-between items-center">
										<h1 className="font-semibold">Date</h1>
										<input
											type="date"
											className="w-48 rounded-sm"
											placeholder="minutes"
											onChange={handler}
											name="date"
											value={handle.date}
										/>
									</div>

									<div className="flex justify-center items-center space-x-5 my-2 mb-4">
										<button
											className="rounded-md text-lg py-2 px-5 text-center hover:scale-105 transition duration-300 border-2 border-black bg-black text-white"
											onClick={() => {
												handle.date === "" || handle.startTime === ""
													? alert("Enter Complete Data")
													: saveActivity();
											}}
										>
											Update Activity
										</button>
										<button
											className="rounded-md text-lg py-2 px-5 text-center hover:scale-105 transition duration-300 border-black text-black border-2"
											onClick={() => {
												// dispatch(addActivityState());
												dispatch(setUpdateState());
											}}
										>
											Cancel
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)} */}
		</>
	);
};

export default AddNewActivityCard;
