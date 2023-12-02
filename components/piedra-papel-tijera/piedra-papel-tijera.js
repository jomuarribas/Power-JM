import { main } from '../../main'
import './piedra-papel-tijera.css'

const hands = [
  { name: 'Piedra', img: '/assets/piedra-papel-tijera/manos/piedra.png' },
  { name: 'Papel', img: '/assets/piedra-papel-tijera/manos/papel.png' },
  { name: 'Tijera', img: '/assets/piedra-papel-tijera/manos/tijeras.png' },
]
const answers = [
  {
    accert: "¡Has ganado!, no pasa nada supongo que será suerte del principiante.",
    fail: "¡Tu pierdes!, soy el mejor y lo sabes..."
  },
  {
    accert: "¿En serio? estas haciendo trampas segurísimo.",
    tie: "Venga que hemos empatado, no volverá a ocrrir",
    fail: "¡Doy caña de la buena, invencible a mas no poder!."
  },
  {
    accert: "Ya me estoy mosqueando, lo digo en serio.",
    tie: "¡Empate sin mas! No me siento orgulloso por ello.",
    fail: "Soy una bestia parda con este juego. Si quieres rendirte..."
  },
  {
    accert: "Venga, tu ganas... Te estoy dejando un poco de ventaja.",
    tie: "Empatar no es ganar asi que venga dale caña otra vez.",
    fail: "¡Soy una máquina! Lo puedes intentar todas las veces que quieras..."
  },
  {
    accert: "¡Vale tu ganas! ¿Que quieres que te de un aplauso?.",
    tie: "Para mi emppatar no es una opción, dale otra vez para que te pueda ganar.",
    fail: "Si quieres abandonar no pasa nada, te guardo el secreto..."
  },
]

export const pptGameLaunch = () => {
  main.textContent = '';

  const pptGameDiv = document.createElement('section')
  pptGameDiv.classList.add('pptGameDiv')
  main.appendChild(pptGameDiv)

  const pptGameTitle = document.createElement('h2')
  pptGameTitle.textContent = 'MONSTER PPT'
  pptGameDiv.appendChild(pptGameTitle)

  const pptGameInfo = document.createElement('div')
  pptGameInfo.classList.add('pptGameInfo')
  pptGameDiv.appendChild(pptGameInfo)

  const pptGameInfoText = document.createElement('div')
  pptGameInfoText.innerHTML = `
        <p>¿Te atreves conmigo ${localStorage.getItem('Nombre')}?</p>
        <p>......</p>
        <p>Si es así elige "Piedra", "Papel" o Tijera y yo elijo otra... ¿Quien ganara?</p>
  `
  pptGameInfo.appendChild(pptGameInfoText)

  const pptGameMonster = document.createElement('div')
  pptGameMonster.classList.add('pptGameMonster')
  pptGameDiv.appendChild(pptGameMonster)

  const pptGameImg = document.createElement('img')
  pptGameImg.src = '/assets/piedra-papel-tijera/pptmonstruo.png'
  pptGameDiv.appendChild(pptGameImg)

  const pptGameDivPlayer = document.createElement('div')
  pptGameDivPlayer.classList.add('pptGameDivPlayer')
  pptGameDiv.appendChild(pptGameDivPlayer)

  for (const hand of hands) {
    const pptHand = document.createElement('div')
    pptHand.classList.add('pptHand')
    pptGameDivPlayer.appendChild(pptHand)

    const pptHandImg = document.createElement('img')
    pptHandImg.src = hand.img
    pptHand.appendChild(pptHandImg)

    const pptHandName = document.createElement('p')
    pptHandName.textContent = hand.name
    pptHand.appendChild(pptHandName)

    pptHandImg.addEventListener('click', playGame)
  }

}

const playGame = (e) => {

  const pptGameInfo = document.querySelector('.pptGameInfo')
  pptGameInfo.innerHTML = ''
  const pptGameInfoText = document.createElement('div')
  pptGameInfoText.innerHTML = `<p>¿Te atreves conmigo ${localStorage.getItem('Nombre')}?</p>`

  pptGameInfo.appendChild(pptGameInfoText)

  const randomImg = hands[Math.floor(Math.random() * hands.length)].img;
  const pptGameMonster = document.querySelector('.pptGameMonster')
  pptGameMonster.innerHTML = ''
  const pptGameAleatoryDiv = document.createElement('div')
  const pptGameAleatoryHand = document.createElement('img')
  pptGameAleatoryHand.src = randomImg

  pptGameMonster.appendChild(pptGameAleatoryDiv)
  pptGameAleatoryDiv.appendChild(pptGameAleatoryHand)

  if (e.target.src === pptGameAleatoryHand.src) {
    pptGameInfoText.innerHTML = answers[Math.floor(Math.random() * answers.length)].tie;
  } else if (
    (e.target.src.includes('piedra.png') && pptGameAleatoryHand.src.includes('tijeras.png')) ||
    (e.target.src.includes('papel.png') && pptGameAleatoryHand.src.includes('piedra.png')) ||
    (e.target.src.includes('tijeras.png') && pptGameAleatoryHand.src.includes('papel.png'))

  ) { pptGameInfoText.innerHTML = answers[Math.floor(Math.random() * answers.length)].accert; }
  else { pptGameInfoText.innerHTML = answers[Math.floor(Math.random() * answers.length)].fail; }




}