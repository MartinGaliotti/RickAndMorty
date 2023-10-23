const { User } = require("../DB_connection");
const userValidator = require("../utils/userValidator");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const validation = userValidator({ email, password });
    if (validation === "ok") {
      const user = await User.create({ email, password });
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: validation });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
