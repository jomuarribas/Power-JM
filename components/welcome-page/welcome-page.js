import { main } from "../../main";
import { memoryDevGameLaunch } from "../memory-dev/memory-dev-game/memory-dev-game";
import { pptGameLaunch } from "../piedra-papel-tijera/piedra-papel-tijera";
import { quienSoyLaunch } from "../quien-soy/quien-soy-game/quien-soy-game";

import './welcome-page.css'

export const welcomePage = () => {
  const welcomeText = `
  <h2 style="color: #ee5522">Hola ${localStorage.getItem('Nombre')},</h2>
  <br>
  <p>Te damos la bienvenida a esta plataforma con tres mini juegos clásicos y muy divertidos...</p>
  <br>
  <p>A continuación te vamos a detallar en que consisten cada uno de ellos, anque seguramente ya sepas 
  como funcionan (porque són muy conocidos), te invitamos a que no te pierdas esta información.</p>
  <br>
  <p>¡¡Arrancamos en 3, 2, 1..."</p>
  `;
  const quienSoyText = `
  <h2 style="color: #0b7d35">QUIEN SOY?</h2>
  <br>
  <p>El clásico al que todos conocemos como "Quien es Quien". Se te van a plantear una serie de preguntas acerca
  de las características de un "personaje misterioso" tendrás que seleccionar la pregunta que creas conveniente 
  pero ¡ten cuidado! porque si la fallas perderás puntos pero si aciertas los ganarás.</p>
  <br>
  <p>Cuando estes listo y consigas ir descartando entre todos los personajes puedes hacer click en la ficha que creas que
  es el personaje. Puedes seleccionar el personaje en el momento que quieras pero contra menos criba tengas más
  suerte tienes que tener para acertarlo, tengo en cuenta.</p>
  `;
  const memoryDevText = `
  <h2 style="color: #0b7d35">MEMORY DEV</h2>
  <br>
  <p>¿Quieres poner a prueba tu memoría? Con Memory Dev tendrás una temática de lo mas tecnológica.</p>
  <br>
  <p>Tienes que ir abriendo casillas y emparejar las que son iguales. Piénsalo bien y no corras porque 
  por cada pareja que falles se te restara 1 punto en tu puntuación total ¿Serás capas de superar tu propio record?</p>
  `;
  const ppt = `
  <h2 style="color:#0b7d35">MONSTER PPT</h2>
  <br>
  <p>¡Cuidado con el monstruo que tiene muy mala leche!</p>
  <br>
  <p>¿Has jugado alguna vez al "Piedra, Papel o Tijera"? Segurísimo que si, pero... ¿has jugado contra
  un cíclope con un "día malo"? Seguro que eso ya no es tan común...</p>
  <br>
  <p>Si lo consigues domar ¡Avísanos!</p>
  `;
  main.innerHTML = '';
  const welcomeDiv = document.createElement('section');
  welcomeDiv.id = 'welcomePage';
  main.appendChild(welcomeDiv);

  const welcome = document.createElement('div');
  welcome.classList.add('welcomeArt');
  welcome.innerHTML = welcomeText
  const quienSoy = document.createElement('article');
  quienSoy.classList.add('quienSoyArt');
  quienSoy.innerHTML = quienSoyText
  const quienSoyButton = document.createElement('button');
  quienSoyButton.textContent = "Jugar"
  const memoryDev = document.createElement('article');
  memoryDev.classList.add('memoryDevArt');
  memoryDev.innerHTML = memoryDevText
  const memoryDevButton = document.createElement('button');
  memoryDevButton.textContent = "Jugar"
  const piedraPapelTijera = document.createElement('article');
  piedraPapelTijera.classList.add('piedraPapelTijeraArt');
  piedraPapelTijera.innerHTML = ppt
  const piedraPapelTijeraButton = document.createElement('button');
  piedraPapelTijeraButton.textContent = "Jugar"

  welcomeDiv.appendChild(welcome);
  welcomeDiv.appendChild(quienSoy);
  welcomeDiv.appendChild(memoryDev);
  welcomeDiv.appendChild(piedraPapelTijera);

  quienSoy.appendChild(quienSoyButton);
  memoryDev.appendChild(memoryDevButton);
  piedraPapelTijera.appendChild(piedraPapelTijeraButton);

  quienSoyButton.addEventListener('click', () => {
    quienSoyLaunch();
  });
  memoryDevButton.addEventListener('click', () => {
    memoryDevGameLaunch();
  });
  piedraPapelTijeraButton.addEventListener('click', () => {
    pptGameLaunch();
  });

}
