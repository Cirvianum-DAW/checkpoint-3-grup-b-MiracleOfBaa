// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[surname="surname"]');
const emailInput = document.querySelector('input[email="email"]');
const ageInput = document.querySelector('input[age="age"]');
const messageInput = document.querySelector('input[message="message"]');

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
  // Validació del nom...
  const name = nameInput.value;
  const containsNumber = /[0-9]/.test(name);
  // Si no és vàlid...
  if(containsNumber || name.length < 3 || name.length >= 50){
    displayError(nameInput, "El nom no és vàlid");
  }
}

function validateSurname() {
    removeExistingError(surnameInput);
    // Validació del cognom...
    const surname = surnameInput.value;
    const containsNumber = /[0-9]/.test(surname);
    // Si no és vàlid...
    if(containsNumber || surname.length < 3 || surname.length >= 50){
      displayError(surnameInput, "El cognom no és vàlid");
    }
}

function validateEmail(){
  removeExistingError(emailInput)
  const email = emailInput.value;
  const regex = /^[^@]+@[^@]+\.[^@]+$/;
  // si no es valid
  if (emailInput.value.match(regex)){
    displayError (emailInput, "El email no es valid");
  }
}

function validateAge() {
  removeExistingError(ageInput);
  // Validació de edat...
  const age = ageInput.value;
  const ageNumber = parseInt(age);
  // Si no és vàlid...
  if(age < 18){
    alert("Has de ser major d'edat");
  }
}

function validateMessage(){
  removeExistingError(messageInput);
  const message = messageInput.value;
}

// addEventListeners...
nameInput.addEventListener("input", validateName);
surnameInput.addEventListener("change", validateSurname);
emailInput.addEventListener("input", validateEmail);
ageInput.addEventListener("input", validateAge);
messageInput.addEventListener("input", validateMessage);
