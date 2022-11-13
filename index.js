require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));
app.use(
	"/",
	createProxyMiddleware({
		target: process.env.API_BASE_URL,
		changeOrigin: true,
	})
);

app.listen(process.env.PORT, () => {
	console.log(`Starting Proxy at ${process.env.PORT}'s port`);
});
