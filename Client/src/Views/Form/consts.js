const consts = {
  emailMaxLength: 35,
  errorVacio: "Este campo no puede estar vacio",
  errorIncorrecto: "El valor ingresado es incorrecto",
  errorMaxCharacter: "Limite de caracteres: ",
  errorMinCharacter: "Minimos caracteres: ",
  errorNoNumber: "Debe contener al menos un numero",
  regexEmail:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  minCharPassword: 6,
  maxCharPassword: 10,
  maxId: 826,
};

export default consts;
