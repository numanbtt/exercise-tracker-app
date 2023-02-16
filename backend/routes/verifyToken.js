const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	// const authHeader = req.headers["authorization"];
	// const token = authHeader && authHeader.split("")[1];
	const token = req.headers["auth-token"];
	if (token == null) {
		return res.sendStatus(401).json({ error: "Access denied." });
	} else {
		try {
			const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
			req.user = verified;
			next();
		} catch (error) {
			res.status(400).send(error);
		}
	}
};

module.exports = verifyToken;
