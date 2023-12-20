import { userName } from "../../../main";
import { memoryDevGameLaunch, scoreMemory } from "../memory-dev-game/memory-dev-game";

import './final-modal.css'

export const finalModal = () => {

  const containerGames = document.getElementById("containerGames")
  const finalDiv = document.createElement('div');
  finalDiv.id = "finalDiv";
  const youWinH2 = document.createElement('h2');
  const youWinP = document.createElement('p');
  const youWinButton = document.createElement('button');

  youWinH2.textContent = `¡Enhorabuena ${localStorage.getItem('Nombre')}! ¿Otra partida?`
  youWinP.innerHTML = `Tu puntuación ha sido de: ${scoreMemory}`
  youWinButton.textContent = "Jugar de nuevo"

  containerGames.appendChild(finalDiv);
  finalDiv.appendChild(youWinH2);
  finalDiv.appendChild(youWinP);
  finalDiv.appendChild(youWinButton);

  youWinButton.addEventListener('click', playNow)

}

const playNow = (e) => {
  e.preventDefault();
  memoryDevGameLaunch();
};