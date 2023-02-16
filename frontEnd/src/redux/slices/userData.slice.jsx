import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const userDataSlice = createSlice({
	name: "userID",
	initialState: {
		userID: sessionStorage.getItem("userID") || "",
		name: sessionStorage.getItem("name") || "",
		userActivitiesState: [],
		// accessToken: localStorage.getItem("accessToken") || "",
	},
	reducers: {
		getUserData: (state, action) => {
			state.userID = action.payload._id;
			state.name = action.payload.name;
			// state.accessToken = action.payload.accessToken;

			sessionStorage.setItem("userID", action.payload._id);
			sessionStorage.setItem("name", action.payload.name);
			// localStorage.setItem("accessToken", action.payload.accessToken);
		},
		setUserActivitiesState: (state, action) => {
			state.userActivitiesState = action.payload;
		},
	},
});

export const { getUserData, setUserActivitiesState } = userDataSlice.actions;

export const fetchTodos = (userID) => async (dispatch) => {
	const response = await fetch(
		`http://127.0.0.1:4000/useractivities/${userID}`
	);
	const data = await response.json();
	// dispatch(setUserActivitiesState(data));
	dispatch(setUserActivitiesState(data));
};
