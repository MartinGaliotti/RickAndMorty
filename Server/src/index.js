const server = require("./app");
const { PORT } = require("./utils/consts");
const { conn } = require("./DB_connection");

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server raised in port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(error.message);
  });
