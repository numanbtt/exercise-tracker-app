import { createSlice } from "@reduxjs/toolkit";

export const userActivityUpdateSlice = createSlice({
	name: "Is Updating",
	initialState: { isUpdatingState: false, userActivityUpdateID: "" },
	reducers: {
		setUpdateState: (state, action) => {
			state.isUpdatingState = !state.isUpdatingState;
			console.log(state.isUpdatingState);
			state.userActivityUpdateID = action.payload;
			console.log(state.userActivityUpdateID);

			// console.log(state.userActivityUpdateID);
		},
	},
});

export const { setUpdateState } = userActivityUpdateSlice.actions;
