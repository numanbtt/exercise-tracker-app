import { configureStore } from "@reduxjs/toolkit";
import { addActivitySlice } from "./slices/AddActivityState.slice";
import { plusIconSlice } from "./slices/PlusIconState.slice";
import { profileClickStateSlice } from "./slices/ProfileClick.slice";
import { userActivityUpdateSlice } from "./slices/userActivityUpdate.slice";
import { userDataSlice } from "./slices/userData.slice";
import { userSignUpSlice } from "./slices/userSignup.slice";

export default configureStore({
	reducer: {
		addActivityModal: addActivitySlice.reducer,
		plusIcon: plusIconSlice.reducer,
		userSignUp: userSignUpSlice.reducer,
		userData: userDataSlice.reducer,
		isUpdating: userActivityUpdateSlice.reducer,
		profileClickState: profileClickStateSlice.reducer,
	},
});
