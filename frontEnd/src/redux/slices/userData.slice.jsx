import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
	name: "userID",
	initialState: {
		userID: sessionStorage.getItem("userID") || "",
		name: sessionStorage.getItem("name") || "",
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
	},
});

export const { getUserData } = userDataSlice.actions;
