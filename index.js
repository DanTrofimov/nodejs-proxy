const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const PORT = process.env.PORT;
const { API_BASE_URL } = process.env;

const app = express();
app.use(morgan("dev"));
app.use(
	"/",
	createProxyMiddleware({
		target: API_BASE_URL,
		changeOrigin: true,
	})
);

app.listen(PORT, () => {
	console.log(`Starting Proxy at ${PORT}'s port`);
});
