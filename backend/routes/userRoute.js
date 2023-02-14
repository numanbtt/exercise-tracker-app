const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require("dotenv/config");

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
			// Generate salt and merge it to password
			// const salt = await bcrypt.genSalt();
			// const hashPassword = await bcrypt.hash(req.body.password, salt);

			// This will directly generate 10 letter salt for us
			const hashPassword = await bcrypt.hash(req.body.password, 10);
			const user = await userModel({ ...req.body, password: hashPassword });
			await user.save();
			// const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
			// 	expiresIn: "15m",
			// });
			// res.json({ jwtToken: accessToken });
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
		// password: req.body.password,
	});
	if (findUser.length !== 0) {
		try {
			if (await bcrypt.compare(req.body.password, findUser[0].password)) {
				const user = await userModel.find({
					email: req.body.email,
					// password: req.body.password,
				});
				return res.status(200).json(...user);
				// return res.status(200);
			}
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

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	// Bearer TOKEN
	if (token == null) {
		return res.sendStatus(401);
	} else {
		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
			if (err) {
				return res.sendStatus(403);
			} else {
				req.user = user;
				next();
			}
		});
	}
};

module.exports = router;
