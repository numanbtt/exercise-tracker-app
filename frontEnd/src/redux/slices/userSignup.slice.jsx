import { createSlice } from "@reduxjs/toolkit";

export const userSignUpSlice = createSlice({
	name: "User Data",
	initialState: {},
	reducers: {
		getUserSignUpData: (state) => {
			state = state;
		},
	},
});

export const { getUserSignUpData } = userSignUpSlice.actions;
