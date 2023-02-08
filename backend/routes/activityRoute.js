const express = require("express");
const router = express.Router();
const activityModel = require("../models/activityModel");

router.get("/", async (req, res) => {
	const activity = await activityModel.find();
	res.send(activity);
});

module.exports = router;
