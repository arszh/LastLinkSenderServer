const express = require("express");
const app = express();

const setupLoadModules = require("./setup/load-modules")
const setupMongoose = require("./setup/mongoose")
const setupRoutes = require("./setup/routes")
const setupStartServer = require("./setup/start-server")


setupLoadModules(app);
setupMongoose();
setupRoutes(app);
setupStartServer(app);