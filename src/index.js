require("dotenv").config();
const Logger = require("./Logger");

require("./DataManager").init();

const express = require("express");
const http = require("http");

const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "1mb" }));
app.use(cors());

// routing
const router = require("./router");
app.use("/", router);
app.use("*", (req, res) => {
	res.status(404).json({ status: 404, message: "Endpoint not found" });
});

Logger.debug("Starting webserver...");
const server = http.createServer(app);
server.listen(process.env.PORT, () => Logger.debug(`Webserver Listening on port ${process.env.PORT}.`));