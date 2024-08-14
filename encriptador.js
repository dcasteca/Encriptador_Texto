const documentReference = document;
const inputTextArea = documentReference.querySelector(".form__input");
const resultImage = documentReference.querySelector(".result__img");
const loadingIndicator = documentReference.querySelector(".loader");
const resultTitle = documentReference.querySelector(".result__title");
const resultText = documentReference.querySelector(".result__text");
const encryptButton = documentReference.querySelector(".form__btn");
const decryptButton = documentReference.querySelectorAll(".form__btn");
const copyButton = documentReference.querySelector(".result__btn");

const substitutionKeys = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encryptMessage(message) {
  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    let currentLetter = message[i];
    let encryptedLetter = currentLetter;
    for (let j = 0; j < substitutionKeys.length; j++) {
      if (currentLetter === substitutionKeys[j][0]) {
        encryptedLetter = substitutionKeys[j][1];
        break;
      }
    }
    encryptedMessage += encryptedLetter;
  }

  return encryptedMessage;
}

function decryptMessage(message) {
  let decryptedMessage = message;
  for (let i = 0; i < substitutionKeys.length; i++) {
    let regexPattern = new RegExp(substitutionKeys[i][1], "g");
    decryptedMessage = decryptedMessage.replace(regexPattern, substitutionKeys[i][0]);
  }
  return decryptedMessage;
}

inputTextArea.addEventListener("input", (event) => {
  resultImage.style.display = "none";
  loadingIndicator.classList.remove("hidden");
  resultTitle.textContent = "Capturando Mensaje.";
  resultText.textContent = "";
});

encryptButton.addEventListener("click", (event) => {
  event.preventDefault();
  let message = inputTextArea.value.toLowerCase();
  let encryptedMessage = encryptMessage(message);
  resultText.textContent = encryptedMessage;
  copyButton.classList.remove("hidden");
  resultTitle.textContent = "El resultado es:";
});

decryptButton[1].addEventListener("click", (event) => {
  event.preventDefault();
  let message = inputTextArea.value.toLowerCase();
  let decryptedMessage = decryptMessage(message);
  resultText.textContent = decryptedMessage;
  resultTitle.textContent = "El resultado es:";
  copyButton.classList.remove("hidden");
});

copyButton.addEventListener('click', () => {
  let copiedText = resultText.textContent;
  navigator.clipboard.writeText(copiedText).then(() => {
    resultImage.style.display = "block";
    loadingIndicator.classList.add("hidden");
    resultTitle.textContent = "El texto se copió";
    copyButton.classList.add("hidden");
    resultText.textContent = "";
  });
});
