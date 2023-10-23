const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password) {
      res.status(400).json({ error: "Faltan datos" });
    }
    const users = await User.findAll({ where: { email } });
    if (users.length === 0) {
      res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      let access = false;
      users.forEach((user) => {
        if (user.password === password) {
          access = true;
        }
      });
      access
        ? res.status(200).json({ access })
        : res.status(403).json({ error: "Contraseña incorrecta" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
