import { footer } from './components/footer/footer';
import { navMenu } from './components/nav/nav';
import { welcomeModal } from './components/welcome-modal/welcome-modal';
import { welcomePage } from './components/welcome-page/welcome-page';
import './style.css'

export let userName = localStorage.getItem('Nombre')
export const main = document.getElementById('containerGames')
const header = document.getElementById('containerHeader')

export const headerBoard = () => {
  const headBoard = document.createElement('div')
  const headTitle = document.createElement('h1')
  const headDescription = document.createElement('p')

  headTitle.textContent = 'POWER JM'
  headDescription.textContent = 'Plataforma de mini juegos'

  header.appendChild(headBoard)
  headBoard.appendChild(headTitle)
  headBoard.appendChild(headDescription)

  headTitle.addEventListener('click', welcomePage)
}

if (userName == null) {
  welcomeModal();
} else {
  navMenu();
  headerBoard();
  welcomePage();
  footer();
}