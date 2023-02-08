import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UserActivities = () => {
	const dispatch = useDispatch();
	const userActivities = useSelector(
		(state) => state.userActivities.userActivity
	);
	console.log(userActivities[0].startTime);
	return (
		<>
			<table cellPadding={10}>
				<tbody>
					<tr>
						<th className="px-3 py-2 text-left">Activity</th>
						<th className="px-3 py-2 text-left">Start Time</th>
						<th className="px-3 py-2 text-left">Duration</th>
						<th className="px-3 py-2 text-left">Date</th>
						<th className="px-3 py-2 text-left">Calories Burn</th>
					</tr>
					{userActivities.map((element, index) => {
						return (
							<tr key={index}>
								<td>{element.activity}</td>
								<td>{element.startTime}</td>
								<td>{element.duration}</td>
								<td>{element.date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default UserActivities;
