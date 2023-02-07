const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		default: "default.jpg",
	},
	date_created: {
		type: Date,
		default: Date.now,
	},
	// To check if I want to remove accounts which haven't logged in for a while
	last_login: {
		type: Date,
	},
	// Current Status
	status: {
		type: String,
		default: "active",
	},
	// Access given to user
	roles: [
		{
			type: String,
		},
	],
	// Theme, Language
	preferences: {
		type: Object,
		default: {},
	},
});

module.exports = mongoose.model("user", userSchema);
