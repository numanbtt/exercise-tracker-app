const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

router.get("/", async (req, res) => {
	const user = await userModel.find();
	if (user.length != 0) {
		res.json(user);
	} else {
		res.send("No data in this api right now");
	}
});

router.post("/", async (req, res) => {
	const user = await userModel(req.body);
	user.save();
	res.json(user);
});

module.exports = router;
