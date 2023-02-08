import { createSlice } from "@reduxjs/toolkit";

export const addActivitySlice = createSlice({
	name: "Activity Page",
	initialState: { isOpen: false },
	reducers: {
		addActivityState: (state) => {
			state.isOpen = !state.isOpen;
			console.log(state.isOpen);
		},
	},
});

export const { addActivityState } = addActivitySlice.actions;
