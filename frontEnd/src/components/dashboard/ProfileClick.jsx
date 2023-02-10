import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfileClickState } from "../../redux/slices/ProfileClick.slice";

const ProfileClick = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<div className="shadow-lg shadow-gray-500">
			<div className="bg-white w-36 rounded-md p-2">
				<h1
					className="hover:bg-white hover:shadow-lg hover:scale-105 p-2 text-black font-bold rounded-md"
					onClick={() => {
						sessionStorage.clear();
						navigate("/");
					}}
				>
					Sign out
				</h1>
			</div>
		</div>
	);
};

export default ProfileClick;
