const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón'
]

const tryOption = 3;
let countOption = 0;

buttonNo.addEventListener('click', () => {
  if (tryOption !== countOption) {
    fontSize = fontSize + .5
    buttonYes.style.fontSize = `${fontSize}rem`

    const indexRandom = Math.floor(Math.random() * messages.length)

    buttonNo.textContent = messages[indexRandom]

    countOption++;
  } else {
    buttonNo.addEventListener('click', () => {
      document.querySelector('#message_error').style.display = 'flex'
      countOption = 0;
    })
  }

})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})