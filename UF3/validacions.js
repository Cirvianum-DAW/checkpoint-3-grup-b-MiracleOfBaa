// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]')
const surnameInput = document.querySelector('input[surname="surname"]');

// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);
  const name = nameInput.value; //creem la const de name
  const teUnNumero = /[0-9]/; //creem el si conte un numero amb regex
  // Si no és vàlid...
  if( teUnNumero || name.length < 3 || name.length >= 50){
    //li diem que si conte un numero del  0 / 9 y que si el nom el lenght es mes curt de 3 o igual o mes llarg a 50
    //que ens posi que no es valid
    displayError(nameInput, "El nom no és vàlid");
  }
}

function validateSurname(){
  removeExistingError(surnameInput)
  const surname = surnameInput.value;
  const teUnNumero = /[0-9]/;
  //si no es valid
  if (teUnNumero || surname.lenght > 3 || surname.lenght >= 50){
      displayError(surnameInput, "El cognom no es vàlid");
  }
}

function validateEmail(){
  removeExistingError(emailInput)
  const email = emailInput.value;
  const regex = /^[^@]+@[^@]+\.[^@]+$/;
  // si no es valid

  if (emailInput.value.match(regex)){
    displayError (emailInput, "El email")
  }
}

// addEventListeners...
nameInput.addEventListener("input", validateName);
surnameInput.addEventListener("input", validateName);
