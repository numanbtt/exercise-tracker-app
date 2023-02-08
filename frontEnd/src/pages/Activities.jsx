import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddActivity from "../components/dashboard/AddActivity";
import UserActivities from "../components/dashboard/userActivities";

const Activities = () => {
	const dispatch = useDispatch();
	const userActivities = useSelector(
		(state) => state.userActivities.userActivity
	);
	return (
		<>
			{userActivities.length == 0 && <AddActivity />}
			{userActivities.length != 0 && <UserActivities />}
		</>
	);
};

export default Activities;
