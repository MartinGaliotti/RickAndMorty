const express = require("express");
const { path } = require("./utils/consts");
const routerGetChar = require("./routes/getCharById");
const routerLogin = require("./routes/login");
const routerFav = require("./routes/handleFavorites");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

server.use(`${path}character`, routerGetChar);
server.use(`${path}login`, routerLogin);
server.use(`${path}fav`, routerFav);

module.exports = server;
