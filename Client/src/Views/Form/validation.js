import consts from "./consts";

const {
  emailMaxLength,
  errorVacio,
  errorIncorrecto,
  regexEmail,
  minCharPassword,
  maxCharPassword,
  errorMaxCharacter,
  errorMinCharacter,
  errorNoNumber,
} = consts;

const validation = (userData, errors, setErrors) => {
  let errorEmail = "";
  let errorPassword = "";
  if (userData.email === "") {
    errorEmail = errorVacio;
  } else if (userData.email.length > emailMaxLength) {
    errorEmail = errorMaxCharacter + emailMaxLength;
  } else if (!regexEmail.test(userData.email)) {
    errorEmail = errorIncorrecto;
  }
  if (!/\d/.test(userData.password)) {
    errorPassword = errorNoNumber;
  } else if (userData.password.length < minCharPassword) {
    errorPassword = errorMinCharacter + minCharPassword;
  } else if (userData.password.length > maxCharPassword) {
    errorPassword = errorMaxCharacter + maxCharPassword;
  }
  setErrors({ email: errorEmail, password: errorPassword });
};

export default validation;
