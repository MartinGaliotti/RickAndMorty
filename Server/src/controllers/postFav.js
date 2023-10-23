const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;
    if (id && name && origin && status && image && species && gender) {
      await Favorite.create({
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      });
      const chars = await Favorite.findAll();
      res.status(200).json(chars);
    } else {
      res.status(401).json({ error: "Faltan datos" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
