import { configureStore } from "@reduxjs/toolkit";
import { addActivitySlice } from "./slices/AddActivityState.slice";
import { plusIconSlice } from "./slices/PlusIconState.slice";
import { userActivitiesSlice } from "./slices/userActivities.slice";
import { userSignUpSlice } from "./slices/userSignup.slice";

export default configureStore({
	reducer: {
		addActivityModal: addActivitySlice.reducer,
		plusIcon: plusIconSlice.reducer,
		userActivities: userActivitiesSlice.reducer,
		userSignUp: userSignUpSlice.reducer,
	},
});
