import Cards from "./Views/Cards/Cards";
import Styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import React from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./Views/About/About";
import Detail from "./Views/Detail/Detail";
import Favorite from "./Views/Favorites/Favorites";
import pathName from "./Helpers/PATHNAME.routes";
import PageNotFound from "./Views/PageNotFound/PageNotFound";
import Form from "./Views/Form/Form";
import consts from "./Views/Form/consts";

const existe = (characters, id) => {
  let exists = false;
  characters.forEach((character) => {
    if (character.id === parseInt(id)) {
      window.alert("Ese personaje ya existe");
      exists = true;
    }
  });
  return exists;
};

function App() {
  const [characters, setCharacters] = React.useState([]);
  const [access, setAccess] = React.useState(false);
  const navigate = useNavigate();

  const onSearch = (id) => {
    if (id < consts.maxId) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            if (!existe(characters, id)) {
              setCharacters((characters) => [...characters, data]);
            }
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    } else {
      window.alert(`El id ingresado es mayor a: ${consts.maxId}`);
    }
  };

  const onClose = (id) => {
    let newCharacters = characters.filter((character) => character.id !== id);
    setCharacters(newCharacters);
  };

  const navRender = () => {
    const actual = useLocation().pathname;
    if (actual !== pathName.FORM) {
      return <Nav logOut={logOut} onSearch={onSearch} />;
    }
  };

  const logOut = () => {
    setAccess(false);
  };

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access
        ? navigate("/home")
        : window.alert("Email o contraseña incorrecta");
    });
  }

  React.useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className={Styles.app}>
      {navRender()}
      <Routes>
        <Route path={pathName.FORM} element={<Form login={login} />} />
        <Route
          path={pathName.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={pathName.FAVORITE} element={<Favorite />} />
        <Route path={pathName.ABOUT} element={<About />} />
        <Route path={`${pathName.DETAIL}/:id`} element={<Detail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
