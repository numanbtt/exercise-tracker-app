import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
	name: "userID",
	initialState: {
		// userID: sessionStorage.getItem("userID") || "",
		// name: sessionStorage.getItem("name") || "",
		userID: localStorage.getItem("userID") || "",
		name: localStorage.getItem("name") || "",
	} || {
		userID: "",
		name: "",
	},
	reducers: {
		getUserData: (state, action) => {
			// sessionStorage.setItem("userID", action.payload._id);
			// sessionStorage.setItem("name", action.payload.name);
			localStorage.setItem("userID", action.payload._id);
			localStorage.setItem("name", action.payload.name);

			state.userID = action.payload._id;
			state.name = action.payload.name;
		},
	},
});

export const { getUserData } = userDataSlice.actions;
