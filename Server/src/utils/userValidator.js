const regexEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const userValidator = ({ email, password }) => {
  if (!regexEmail.test(email)) {
    return "Invalid email";
  }
  if (password === "") {
    return "Invalid password";
  }
  return "ok";
};

module.exports = userValidator;
