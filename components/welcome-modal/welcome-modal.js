import { headerBoard } from '../../main';
import { footer } from '../footer/footer';
import { navMenu } from '../nav/nav';
import { welcomePage } from '../welcome-page/welcome-page';
import './welcome-modal.css'

export const welcomeModal = () => {

  const containerGames = document.getElementById("containerGames")
  const welcomeDiv = document.createElement('div');
  welcomeDiv.id = "welcome";
  const wlcmLogoDiv = document.createElement('div');
  const wlcmLogo = document.createElement('h1');
  const wlcmH2 = document.createElement('h2');
  const wlcmP = document.createElement('p');
  const wlcmForm = document.createElement('form');
  const wlcmFormText = document.createElement('p');
  const wlcmInput = document.createElement('input');
  wlcmInput.classList.add('wlcmInput');
  const wlcmformButton = document.createElement('button');

  wlcmLogo.textContent = "Power JM"
  wlcmP.innerHTML = `¡Bienvenidos a esta plataforma de minijuegos!
  Si te apetece un poco de entretenimiento... ADELANTE!!`
  wlcmFormText.textContent = "¿Como te llamas?"
  wlcmformButton.textContent = "Entrar"
  wlcmformButton.type = "submit"


  containerGames.appendChild(welcomeDiv);
  welcomeDiv.appendChild(wlcmLogoDiv);
  wlcmLogoDiv.appendChild(wlcmLogo);
  welcomeDiv.appendChild(wlcmH2);
  welcomeDiv.appendChild(wlcmP);
  welcomeDiv.appendChild(wlcmForm);
  wlcmForm.appendChild(wlcmFormText);
  wlcmForm.appendChild(wlcmInput);
  wlcmForm.appendChild(wlcmformButton);

  wlcmformButton.addEventListener('click', getItName)

}

const getItName = (e) => {
  if (e.target.form[0].value.length > 0) {
    e.preventDefault();
    localStorage.setItem('Nombre', e.target.form[0].value)
    navMenu();
    headerBoard();
    welcomePage();
    footer();
  } else {
    e.preventDefault();
    const wlcmInput = document.querySelector('.wlcmInput');
    wlcmInput.placeholder = "Introduce tu nombre"
  }
}