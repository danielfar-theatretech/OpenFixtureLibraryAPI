const winston = require("winston");
const { inspect } = require("util");

const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4
};

const level = () => {
	const env = process.env.NODE_ENV || "development";
	const isDevelopment = env === "development";
	return isDevelopment ? "debug" : "warn";
};

const colors = {
	error: "red",
	warn: "yellow",
	info: "white",
	http: "magenta",
	debug: "gray"
};

winston.addColors(colors);

const format = winston.format.combine(
	winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
	winston.format.printf((info) => `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`)
);

const transports = [
	new winston.transports.Console({
		format: winston.format.combine(format, winston.format.colorize({ all: true }))
	}),
	new winston.transports.File({
		filename: `./logs/${new Date().toISOString().slice(0, 10)}.error.log`,
		level: "error"
	}),
	new winston.transports.File({
		filename: `./logs/${new Date().toISOString().slice(0, 10)}.all.log`
	})
];

const Logger = winston.createLogger({
	level: level(),
	levels,
	format,
	transports
});

// on a warning send it to our logger
process.on("warning", (warning) => {
	Logger.warn(`${warning.name}: ${warning.message}\nStack: ${warning.stack}`);
});

// on uncaugth exceptions and unhandled promise catches log the appropriate message
process.on("uncaughtException", (err, origin) => {
	Logger.error(`Uncaught Exception: ${err.stack}\nAt ${origin}`);
});

process.on("unhandledRejection", (reason, promise) => {
	Logger.error(
		`Unhandled Rejection at: ${inspect(promise, {
			depth: null
		})}`
	);
});

module.exports = Logger;
