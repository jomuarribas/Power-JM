import { main } from '../../main';
import { memoryDevGameLaunch } from '../memory-dev/memory-dev-game/memory-dev-game';
import { pptGameLaunch } from '../piedra-papel-tijera/piedra-papel-tijera';
import { quienSoyLaunch } from '../quien-soy/quien-soy-game/quien-soy-game';
import './nav.css'

export const navMenu = () => {

  const nav = document.getElementById('nav');

  const navQuienSoy = document.createElement('button');
  const navMemoryDev = document.createElement('button');
  const navPiedraPapelTijera = document.createElement('button');

  navQuienSoy.className = 'navQuienSoy';
  navMemoryDev.className = 'navMemoryDev';
  navPiedraPapelTijera.className = 'navPiedraPapelTijera';

  navQuienSoy.textContent = 'Quien Soy?';
  navMemoryDev.textContent = 'Memory Dev';
  navPiedraPapelTijera.textContent = 'Monster PPT';

  nav.appendChild(navQuienSoy);
  nav.appendChild(navMemoryDev);
  nav.appendChild(navPiedraPapelTijera);

  navQuienSoy.addEventListener('click', () => {
    quienSoyLaunch();
  });
  navMemoryDev.addEventListener('click', () => {
    memoryDevGameLaunch()
  });
  navPiedraPapelTijera.addEventListener('click', () => {
    pptGameLaunch();
  });

}