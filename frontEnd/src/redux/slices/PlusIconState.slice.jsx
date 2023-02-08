import { createSlice } from "@reduxjs/toolkit";

export const plusIconSlice = createSlice({
	name: "Plus Icon State",
	initialState: { plusIcon: false },
	reducers: {
		plusIconState: (state) => {
			state.plusIcon = !state.plusIcon;
			console.log(state.plusIcon);
		},
	},
});
export const { plusIconState } = plusIconSlice.actions;
