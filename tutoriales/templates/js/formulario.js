const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input')

const expresiones = {
	nickname: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!&%*?])(?!\s)[a-zA-Z\d#$@!&%*?]{8,16}$/, // debe de tener de 8 a 16 caracteres y por lo menos una letra minuscula, mayuscula, caracter especial, numero y no debe contener espacios
  email: /^[\w-.]+@[\w-_]+(\.[a-zA-Z]{2,4}){1,2}$/
}

const campos = {
  usuario: false,
  email: false,
  password: false
}

const validarFormulario = (e) => {
  switch (e.target.name){
    case "nick":
      validarCampo(expresiones.nickname, e.target, 'nickname');
    break;
    case "email":
      validarCampo(expresiones.email, e.target, 'email');
    break;
    case "pass":
      validarCampo(expresiones.password, e.target, 'password');
    break;
  }
}

const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('form__label--grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('form__label--grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo} .form__label--error`).classList.remove('form__label--error-activo');
    campos[campo] = true;
  }else{
    document.getElementById(`grupo__${campo}`).classList.add('form__label--grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('form__label--grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__${campo} .form__label--error`).classList.add('form__label--error-activo');
    campos[campo] = true;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const terminos = document.getElementById('terminos');
  if(campos.nickname && campos.email && campos.password && terminos.checked){
    formulario.reset()

    document.getElementById('form__mensaje--exito').classList.add('form__mensaje--exito-activo')
    setTimeout(() => {
      document.getElementById('form__mensaje--exito').classList.remove('form__mensaje--exito-activo')
    }, 5000)

    document.querySelectorAll('.form__label--grupo-correcto').forEach((icono) => {
      icono.classList.remove('form__label--grupo-correcto');
    });
  }else{
    document.getElementById('form__mensaje').classList.add('form__mensaje-activo')
    setTimeout(() => {
      document.getElementById('form__mensaje').classList.remove('form__mensaje-activo')
    }, 5000)
  }

});