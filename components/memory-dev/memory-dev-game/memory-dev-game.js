import { printCards } from "../print-cards/print-cards";
import { main, } from "../../../main";
import "./memory-dev-game.css";
import { finalModal } from "../final-modal/final-modal";

export let scoreMemory = 0;

export const memoryDevGameLaunch = () => {
  main.innerHTML = ''
  scoreMemory = 0;
  const memoryDevGame = document.createElement("section");
  memoryDevGame.id = "memoryDevGame";
  main.appendChild(memoryDevGame)

  // ---TITULO ---
  const titleMemory = document.createElement('h2');
  titleMemory.innerHTML = "Memory DEV!!"
  memoryDevGame.appendChild(titleMemory)

  // ---PUNTUACIÓN ---
  const scoreMemoryDiv = document.createElement('div');
  const scoreMemoryH3 = document.createElement('h3');
  scoreMemoryDiv.classList.add('scoreMemoryDiv');
  scoreMemoryH3.classList.add('scoreMemoryH3');

  scoreMemoryH3.textContent = `Tu puntuación es de: ${scoreMemory}`

  memoryDevGame.appendChild(scoreMemoryDiv);
  scoreMemoryDiv.appendChild(scoreMemoryH3);

  printCards();

  // --- REINICIAR ---
  const buttonMemoryDiv = document.createElement('div');
  const buttonMemory = document.createElement('button');
  buttonMemoryDiv.classList.add('buttonMemoryDiv');

  buttonMemory.textContent = `Reiniciar`

  memoryDevGame.appendChild(buttonMemoryDiv);
  buttonMemoryDiv.appendChild(buttonMemory);

  buttonMemory.addEventListener('click', restartGame);

}

const restartGame = () => {
  scoreMemory = 0;
  const openCards = document.querySelectorAll('.open')
  for (const item of openCards) {
    item.classList.remove('open');
  }
  setTimeout(() => {
    main.innerHTML = '';
    memoryDevGameLaunch();
  }, 500)
};

let clickCount = 0;
let firstCard = '';

export const memoryDevPlay = (e) => {
  e.target.classList.add('open', 'newCard')

  clickCount++;
  let card = e.target.children[0].children[0].attributes[1].value

  if (clickCount === 1) {
    firstCard = card
  }
  if (clickCount === 2) {
    const scoreMemoryH3 = document.querySelector('.scoreMemoryH3')
    if (e.target.children[0].children[0].attributes[1].value === firstCard) {
      const newCard = document.querySelectorAll('.newCard')
      for (const item of newCard) {
        item.classList.remove('newCard');
      }
      scoreMemory = scoreMemory + 10;
      scoreMemoryH3.textContent = `Tu puntuación es de: ${scoreMemory}`
      const final = document.getElementsByClassName("memoryCard open")
      if (final.length == 16) { finalModal() }
    } else {
      scoreMemory = scoreMemory - 1;
      scoreMemoryH3.textContent = `Tu puntuación es de: ${scoreMemory}`
      setTimeout(() => {
        const newCard = document.querySelectorAll('.newCard')
        for (const item of newCard) {
          item.classList.remove('open', 'newCard');
        }
      }, 600);
    }
    clickCount = 0;
    firstCard = '';
  }
}