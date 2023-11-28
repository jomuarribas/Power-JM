import { userName } from "../../../main";
import { puntuacion, quienSoyLaunch, randomName } from "../quien-soy-game/quien-soy-game";

import './you-win-modal.css'

export const youWinModal = () => {

  const containerGames = document.getElementById("containerGames")
  const youWinDiv = document.createElement('div');
  youWinDiv.id = "youWinDiv";
  const youWinH2 = document.createElement('h2');
  const youWinP = document.createElement('p');
  const youWinButton = document.createElement('button');

  youWinH2.textContent = `¡Soy ${randomName}! ¿Otra partida?`
  youWinP.innerHTML = `Tu puntuación ha sido de: ${puntuacion}`
  youWinButton.textContent = "Jugar de nuevo"

  containerGames.appendChild(youWinDiv);
  youWinDiv.appendChild(youWinH2);
  youWinDiv.appendChild(youWinP);
  youWinDiv.appendChild(youWinButton);

  youWinButton.addEventListener('click', playNow)

}

const playNow = (e) => {
  e.preventDefault();
  quienSoyLaunch()
};
