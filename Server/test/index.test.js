const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
const users = require("../src/utils/users");

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Responde un objeto con propiedades especificas", async () => {
      const res = await agent.get("/rickandmorty/character/1");
      expect(res.body).toHaveProperty(
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image"
      );
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/false").expect(500);
    });

    it("Si no recibe ID responde con status: 404", async () => {
      await agent.get("/rickandmorty/character/").expect(404);
    });
  });

  describe("GET /rickandmorty/login", () => {
    const usuarioReal = users[0];
    const usuarioFalso = {
      email: "correoFalso@gmail.com",
      password: "COntraseñaFalsa",
    };

    it("Usuario es correcto, habilita el acceso", async () => {
      await agent.get(
        `/rickandmorty/login?email=${usuarioReal.email}&&password=${usuarioReal.password}`
      );
    });

    it("Usuario no es correcto, no habilita el acceso", async () => {
      await agent.get(
        `/rickandmorty/login?email=${usuarioFalso.email}&&password=${usuarioFalso.password}`
      );
    });
  });

  describe("POST /rickandmorty/fav", () => {
    let chars = [];

    it("Devuelve el personaje agregado", async () => {
      const char = {
        id: "5",
        status: "Alive",
        name: "Summer Smith",
        species: "Human",
        origin: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        gender: "Female",
      };
      chars.push(char);
      const res = await agent.post("/rickandmorty/fav").send(char);
      expect(res.body).toEqual(chars);
    });

    it("Devuelve la lista de personajes", async () => {
      const char = {
        id: "9",
        status: "Dead",
        name: "Agency Director",
        species: "Human",
        origin: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        gender: "Male",
      };

      chars.push(char);

      const res = await agent.post("/rickandmorty/fav").send(char);
      expect(res.body).toEqual(chars);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    const chars = [
      {
        id: "5",
        status: "Alive",
        name: "Summer Smith",
        species: "Human",
        origin: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        gender: "Female",
      },
      {
        id: "9",
        status: "Dead",
        name: "Agency Director",
        species: "Human",
        origin: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        gender: "Male",
      },
    ];

    it("Si se envia un id que no esta en la lista no modifica", async () => {
      const res = await agent.delete("/rickandmorty/fav/3");
      expect(res.body).toEqual(chars);
    });

    it("Si recibe un id que esta en la lista elimina el elemnto", async () => {
      chars.pop();
      const res = await agent.delete("/rickandmorty/fav/9");
      expect(res.body).toEqual(chars);
    });
  });
});
