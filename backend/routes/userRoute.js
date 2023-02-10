const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

router.get("/", async (req, res) => {
	const user = await userModel.find();
	if (user.length != 0) {
		res.json(user);
	} else {
		res.send("No user is registered at your website yet");
	}
});

router.post("/signup/", async (req, res) => {
	const username = await userModel.find({ username: req.body.username });
	const email = await userModel.find({ email: req.body.email });
	if (username.length === 0 && email.length === 0) {
		try {
			const user = await userModel(req.body);
			await user.save();
			return res.status(200).send(user);
		} catch (error) {
			console.log(error);
		}
	} else {
		console.log("username or email already taken");
		return res.status(400).json({ message: "Email or username already taken" });
	}
});

router.post("/login/", async (req, res) => {
	const findUser = await userModel.find({
		email: req.body.email,
		password: req.body.password,
	});
	if (findUser.length !== 0) {
		try {
			const user = await userModel.find({
				email: req.body.email,
				password: req.body.password,
			});
			return res.status(200).json(...user);
		} catch (error) {
			console.log(error);
		}
	} else {
		console.log("user does not exist");
		return res.status(400).json({ message: "user does not exist" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const user = await userModel.findByIdAndDelete(req.params.id);
		res.json(user);
	} catch (error) {
		console.log(error);
	}
});

router.put("/:id", async (req, res) => {
	try {
		const user = await userModel.findByIdAndUpdate(req.params.id, {
			$set: req.body,
		});
		res.json(user);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
