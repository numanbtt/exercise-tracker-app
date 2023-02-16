import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfileClickState } from "../../redux/slices/ProfileClick.slice";
import { BiLogOutCircle, BiUpload } from "react-icons/bi";

const ProfileClick = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	var userID = useSelector((state) => state.userData.userID);
	const [handleAvatar, setHandleAvatar] = useState({});
	const handler = (e) => {
		setHandleAvatar({ ...handleAvatar, [e.target.name]: e.target.files[0] });
	};
	const uploadAvatar = async () => {
		const myFormData = new FormData();
		myFormData.append("avatar", handleAvatar.avatar);
		await fetch(`http://127.0.0.1:4000/users/${userID}`, {
			method: "PUT",
			body: myFormData,
		});
	};
	useEffect(() => {
		if (handleAvatar.avatar) {
			// uploadAvatar().then(() => {
			// 	dispatch(setProfileClickState());
			// });
			uploadAvatar();
			dispatch(setProfileClickState());
		}
	}, [handleAvatar]);
	return (
		<>
			<div className=" fixed right-0 top-12 z-[999] rounded-lg bg-white px-2 shadow-lg shadow-gray-500">
				<div className="flex w-36 cursor-pointer items-center space-x-3 p-2 transition duration-300 hover:scale-105">
					<label
						htmlFor="avatar"
						className="flex cursor-pointer space-x-3  font-bold"
					>
						<BiUpload className="mr-3 text-2xl font-bold" />
						Upload file
					</label>
					<input
						type="file"
						name="avatar"
						id="avatar"
						onChange={(e) => {
							handler(e);
						}}
						className="-z-10 w-0 opacity-0"
					/>
				</div>
				<div className="flex w-36 cursor-pointer items-center  space-x-3 p-2 transition duration-300 hover:scale-105">
					<BiLogOutCircle className="text-2xl font-bold" />
					<h1
						className=" p-2 font-bold text-black"
						onClick={() => {
							localStorage.clear();
							dispatch(setProfileClickState());
							navigate("/");
						}}
					>
						Sign out
					</h1>
				</div>
			</div>
		</>
	);
};

export default ProfileClick;
