import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addActivityState } from "../../redux/slices/AddActivityState.slice";
import { getUserActivity } from "../../redux/slices/userActivities.slice";

const AddNewActivityCard = () => {
	// To check whether Add new card option is open or not
	var isOpen = useSelector((state) => state.addActivityModal.isOpen);
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
		startTime: "",
		duration: 30,
		date: "",
	});
	const handler = (e) => {
		setHandle({ ...handle, [e.target.name]: e.target.value });
		console.table(handle);
	};

	// Send and Save Data into Redux State
	const saveActivity = () => {
		dispatch(getUserActivity(handle));
	};
	useEffect(() => {
		fetchActivities();
	}, [isOpen]);

	return (
		<>
			isOpen && (
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
										className="w-48 rounded-sm form-select"
										onChange={handler}
										value={handle.activity}
										name="activity"
									>
										{activityOptions.map((element) => (
											<option
												className="bg-gray-500 text-white"
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
											saveActivity();
											dispatch(addActivityState());
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
							</div>
						</div>
					</div>
				</div>
			</div>
			)
		</>
	);
};

export default AddNewActivityCard;
