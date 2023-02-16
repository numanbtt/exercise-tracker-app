const express = require("express");
const app = express();
require("dotenv/config");

// Set-up port connection
app.listen(process.env.PORT, () => {
	console.log(`Port is connected at ${process.env.PORT}`);
});

// Import and connect cors library
const cors = require("cors");
app.use(cors());

// Import express-static library to view images
app.use(express.static("assets"));

// Import Mongoose Library
const mongoose = require("mongoose");

// Create and connect Database
mongoose.set("strictQuery", false);
mongoose
	.connect(process.env.trackerDatabase, { useNewUrlParser: true })
	.then(() => {
		console.log(`Database is connected now`);
	});

// Import and use body-parser to handle data in database
// app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// To show images on frontend
app.use(express.static("assets"));

// Import User Router
const userRouter = require("./routes/userRoute");
app.use("/users", userRouter);

// Import Activity Router
const activityRouter = require("./routes/activityRoute");
app.use("/activities", activityRouter);

// Import User Activities Router
const userActivitiesRouter = require("./routes/userActivitiesRoutes");
app.use("/useractivities", userActivitiesRouter);
