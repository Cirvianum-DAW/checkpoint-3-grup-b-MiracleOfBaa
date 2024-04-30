// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const emailInput = document.querySelector('input[name="email"]');
const genderInput = document.querySelector('select[name="gender"]');
const ageInput = document.querySelector('input[name="age"]');
const messageInput = document.querySelector('textarea[name="message"]');

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

function validateEmail() {
  removeExistingError(emailInput);
  // Validació del correu...
  const email = emailInput.value;
  const valid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
  // Si no és vàlid...
  if(valid == false){ //ho he cambiat per un valid = false perque non funcionaba
    displayError(emailInput, "El correu no és vàlid");
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

function validateGender() {
  removeExistingError(genderInput);
  // Validació del gènere...
  const gender = genderInput.value;
  console.log(gender)
  // Si no és vàlid...
  if(gender != "male" && gender != "female" && gender != "other"){
    displayError(genderInput, "El gènere no és vàlid");
  }
}

function validateMessage() {
  removeExistingError(messageInput);
  // Validació de missatge...
  const message = messageInput.value;
  // Si no és vàlid...
  if(message.length < 10 || message.length > 200){ //fem el mateix que feiem amb el nom
    displayError(messageInput, "El missatge ha de tenir entre 10 i 200 caràcters.");
  }
}




// addEventListeners...
nameInput.addEventListener("input", validateName);
surnameInput.addEventListener("input", validateSurname);
emailInput.addEventListener("input", validateEmail);
ageInput.addEventListener("submit", validateAge);
messageInput.addEventListener("input", validateMessage);
