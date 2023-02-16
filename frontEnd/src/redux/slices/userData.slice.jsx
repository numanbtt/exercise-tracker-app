import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
	name: "userID",
	initialState: {
		userID: localStorage.getItem("userID") || "",
		name: localStorage.getItem("name") || "",
		// accessToken: localStorage.getItem("accessToken") || "",
	},
	reducers: {
		getUserData: (state, action) => {
			localStorage.setItem("userID", action.payload._id);
			localStorage.setItem("name", action.payload.name);
			// localStorage.setItem("accessToken", action.payload.accessToken);

			state.userID = action.payload._id;
			state.name = action.payload.name;
			// state.accessToken = action.payload.accessToken;
		},
	},
});

export const { getUserData } = userDataSlice.actions;
