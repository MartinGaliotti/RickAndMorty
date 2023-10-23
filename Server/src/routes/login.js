const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const express = require("express");
const routerLogin = express.Router();

routerLogin.use(express.json());

routerLogin.get("/", login);
routerLogin.post("/", postUser);

module.exports = routerLogin;
