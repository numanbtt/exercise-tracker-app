import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddActivity from "../components/dashboard/AddActivity";
import UserActivities from "../components/dashboard/userActivities";

const Activities = () => {
	var userID = useSelector((state) => state.userData.userID);
	var dispatch = useDispatch();
	const [userActivities, setUserActivities] = useState([]);
	const getUserActivities = async () => {
		var data = await fetch(`http://127.0.0.1:4000/useractivities/${userID}`);
		data = await data.json();
		setUserActivities(data);
	};

	useEffect(() => {
		getUserActivities();
	}, [userActivities]);

	return (
		<>
			{userActivities.length == 0 && <AddActivity />}
			{userActivities.length != 0 && <UserActivities />}
		</>
	);
};

export default Activities;
