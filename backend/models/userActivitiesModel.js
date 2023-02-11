const mongoose = require("mongoose");
// const user = require("./userModel");

const userActivitesSchema = mongoose.Schema({
	activity: { type: String },
	startTime: { type: String },
	duration: { type: Number },
	date: { type: Date, default: Date.now() },
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
});

module.exports = mongoose.model("userActivities", userActivitesSchema);
