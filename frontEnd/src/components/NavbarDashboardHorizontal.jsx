import React, { useState, useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setProfileClickState } from "../redux/slices/ProfileClick.slice";
import ProfileClick from "./dashboard/ProfileClick";

const NavbarDashboardHorizontal = () => {
	const [imageLink, setImageLink] = useState("");
	const dispatch = useDispatch();
	var userID = useSelector((state) => state.userData.userID);
	const profileClickState = useSelector(
		(state) => state.profileClickState.profileClickState
	);
	const getAvatar = async () => {
		var data = await fetch(`http://127.0.0.1:4000/users/${userID}`);
		data = await data.json();
		setImageLink(`http://127.0.0.1:4000/${data.avatar}`);
	};

	const openSignOut = () => {
		dispatch(setProfileClickState());
	};
	useEffect(() => {
		getAvatar();
	}, [profileClickState]);
	const name = useSelector((state) => state.userData.name);
	return (
		<div>
			<div className="glassmorphism flex h-full items-center justify-between rounded-xl py-2 ">
				<h1 className="px-4 font-sans font-bold text-white md:text-lg lg:text-2xl">
					Good Morning, {<span className="capitalize italic">{name}</span>}!
				</h1>

				<div className="relative mx-4 flex items-center justify-center space-x-3">
					<IoMdNotificationsOutline className=" cursor-pointer text-2xl text-white transition duration-300 hover:rotate-12 hover:scale-105" />
					<div
						className="h-10 w-10 cursor-pointer"
						onClick={() => {
							dispatch(setProfileClickState());
						}}
					>
						<img
							src={`${imageLink}`}
							alt=""
							className="h-10 w-10 rounded-full object-cover object-center"
						/>
					</div>
				</div>
				{profileClickState && (
					// <div className="fixed right-0 top-12 z-[999]">
					<ProfileClick />
					// </div>
				)}
			</div>
		</div>
	);
};

export default NavbarDashboardHorizontal;
