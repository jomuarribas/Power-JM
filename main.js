import { quienSoyLaunch } from './components/quien-soy/quien-soy-game/quien-soy-game'
import { welcomeModal } from './components/welcome-modal/welcome-modal';
import './style.css'

export let userName = localStorage.getItem('Nombre')
export const main = document.getElementById('containerGames')


if (userName == null) {
  welcomeModal()
} else {
  quienSoyLaunch()
}