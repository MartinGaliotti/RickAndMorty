const express = require("express");
const routerGetChar = express.Router();
const { URL } = require("../utils/consts");
const axios = require("axios");

routerGetChar.use(express.json());

routerGetChar.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const respuesta = await axios.get(URL + id);
      const { status, name, species, origin, image, gender } = respuesta.data;
      const character = {
        id,
        status,
        name,
        species,
        origin: origin.name,
        image,
        gender,
      };
      res.status(200).json(character);
    } else {
      res.status(404).send("No se recibio un ID");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = routerGetChar;
