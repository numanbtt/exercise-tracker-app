const mongoose = require("mongoose");

const userActivitesSchema = mongoose.Schema({
	activity: { type: String, required: true },
	startTime: { type: Date, required: true },
	duration: { type: Number, required: true },
	date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("userActivities", userActivitesSchema);
