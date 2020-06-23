const express = require("express");
const cors = require("cors");
const app = express();
const compression = require("compression");
const helmet = require("helmet");
require("dotenv").config();

//Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});

//Middlewares
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Import Routes
const listRoute = require("./routes/list");
const searchRoute = require("./routes/search");
const timelineRoute = require("./routes/timeline");
app.use("/api/list/", listRoute);
app.use("/api/search/", searchRoute);
app.use("/api/timeline/", timelineRoute);