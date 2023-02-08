import { createSlice } from "@reduxjs/toolkit";

export const userActivitiesSlice = createSlice({
	name: "User Activity",
	initialState: { userActivity: [] },
	reducers: {
		getUserActivity: (state, action) => {
			state.userActivity = [...state.userActivity, action.payload];
			console.log(state.userActivity);
		},
	},
});

export const { getUserActivity } = userActivitiesSlice.actions;
