import { useState } from "react";
import { useLocation } from "react-router-dom";
import validation from "./validation";
import Styles from "./Form.module.css";

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <div className={Styles.email}>
          <label className={Styles.label} htmlFor="email">
            Email:{" "}
          </label>
          <input
            className={Styles.inputEmail}
            onChange={handleChange}
            value={userData.email}
            type="text"
            name="email"
            placeholder="Ingresar email..."
          ></input>
          <p>{errors.email}</p>
        </div>
        <div className={Styles.password}>
          <label className={Styles.label} htmlFor="password">
            Password:
          </label>
          <input
            className={Styles.inputPassword}
            onChange={handleChange}
            value={userData.password}
            type="password"
            name="password"
            placeholder="Ingresar contraseña..."
          />
          <p>{errors.password}</p>
        </div>
        <button className={Styles.button} type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Form;
