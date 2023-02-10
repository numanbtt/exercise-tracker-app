const express = require("express");
const route = express.Router();
const userModel = require("../models/userModel");
const userActivitiesModel = require("../models/userActivitiesModel");

// Get all user activities
route.get("/", async (req, res) => {
	try {
		const userActivities = await userActivitiesModel.find().sort({ date: -1 });
		res.send(userActivities);
	} catch (error) {
		console.log(error);
	}
});

// get all Activities of Specific User
route.get("/:userid", async (req, res) => {
	try {
		const userActivities = await userActivitiesModel
			.find({
				user: req.params.userid,
			})
			.sort({ date: -1 });
		res.send(userActivities);
	} catch (error) {
		console.log(error);
	}
});

// get specific Activity by id
route.get("/activity/:id", async (req, res) => {
	try {
		const userActivities = await userActivitiesModel.findById(req.params.id);
		res.send(userActivities);
	} catch (error) {
		console.log(error);
	}
});

// Post activities to a specific user
route.post("/:userid", async (req, res) => {
	try {
		const userActivity = await userActivitiesModel({
			...req.body,
			user: req.params.userid,
		});
		await userActivity.save();
		res.send(userActivity);
		// res.status(200).json(userActivity);
	} catch (error) {
		console.log(error);
	}
});

route.delete("/:id", async (req, res) => {
	const userActivity = await userActivitiesModel.findByIdAndDelete(
		req.params.id
	);
	res.send(userActivity);
});

route.put("/:id", async (req, res) => {
	const userActivity = await userActivitiesModel.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body }
	);
	res.send(userActivity);
});

module.exports = route;
