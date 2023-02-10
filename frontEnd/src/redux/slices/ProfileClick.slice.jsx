import { createSlice } from "@reduxjs/toolkit";

export const profileClickStateSlice = createSlice({
	name: "Profile Click State",
	initialState: { profileClickState: false },
	reducers: {
		setProfileClickState: (state) => {
			state.profileClickState = !state.profileClickState;
			console.log(state.profileClickState);
		},
	},
});

export const { setProfileClickState } = profileClickStateSlice.actions;
