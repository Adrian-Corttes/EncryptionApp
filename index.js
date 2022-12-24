let btnEncrypt = document.querySelector('.container-btn__encrypt');
let btnDecrypt = document.querySelector('.container-btn__decrypt');
let btnCopy = document.querySelector('.card2__btn');
let textarea = document.querySelector('.main__textarea');
let textarea2 = document.querySelector('.card2__textarea');
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');

window.addEventListener('load', () => {
   const contenedorLoader = document.querySelector('.container--loader');
   contenedorLoader.style.opacity = 0;
   contenedorLoader.style.visibility = 'hidden';
})

function focus() {
   let input = document.querySelector(".main__textarea");
   input.focus();
}

function value() {
   let input = document.querySelector(".main__textarea");
   input.value = '';
}

function displayOn() {
   card1.style.display = 'none'
   card2.style.display = 'flex'
}

function displayOff() {
   card1.style.display = 'block'
   card2.style.display = 'none'
}

function encryptText(message) {
   if (/[^a-zñ ]/.test(message)) {
      alert('Oops... Solo se permiten letras minusculas y sin acento')
      value()
      focus()
   }else if(message.length === 0){
      alert('Oops... El campo de texto está vacio, escriba el texto que desea encriptar')
      displayOff()
   }

   return message.replace(/[aeiou]/gm, (text) => {
      switch (text) {
         case 'a':
            return 'ai';
         case 'e':
            return 'enter';
         case 'i':
            return 'imes';
         case 'o':
            return 'ober';
         case 'u':
            return 'ufat';
         default:
            return text;
      }
   });
}

function decryptText(message) {
   if(message.length === 0){
      alert('Oops... El campo de texto está vacio, escriba el texto que desea desencriptar')
      displayOff()
   }
   return message.replace(/enter|imes|ai|ober|ufat/gm, (text) => {
      switch (text) {
         case 'ai':
            return 'a';
         case 'enter':
            return 'e';
         case 'imes':
            return 'i';
         case 'ober':
            return 'o';
         case 'ufat':
            return 'u';
         default:
            return text;
      }
   });
}

function encrypt() {
   displayOn()
   textarea2.textContent = encryptText(textarea.value)
   value()
}
function decrypt() {
   displayOn()
   textarea2.textContent = decryptText(textarea.value)
   value()
}

function copy() {
   let text = textarea2.value
   navigator.clipboard.writeText(text)
   displayOff()
   alert('¡El texto se copio correctamente!.')
   value()
   focus()
}

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;
btnCopy.onclick = copy;

focus();
value();