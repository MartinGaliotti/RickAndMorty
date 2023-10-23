const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).json({ error: "No se recibio ID" });
    }
    const char = await Favorite.findByPk(id);
    await char.destroy();
    const chars = await Favorite.findAll();
    res.status(200).json(chars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
