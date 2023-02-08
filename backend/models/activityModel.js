const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
	activity: { type: String },
});

module.exports = mongoose.model("activities", activitySchema);
