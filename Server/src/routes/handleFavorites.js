const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

const express = require("express");

const routerFav = express.Router();

routerFav.use(express.json());

routerFav.post("/", postFav);
routerFav.delete("/:id", deleteFav);

module.exports = routerFav;
