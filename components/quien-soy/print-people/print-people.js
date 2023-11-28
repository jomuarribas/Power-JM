import { gameOver, peopleFilter } from "../quien-soy-game/quien-soy-game";
import './print-people.css';

export const people = [
  {
    id: 1,
    name: 'Alba',
    hairColor: 'blonde',
    hairLength: 'long',
    glasses: false,
    gender: 'female',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/alba.png'
  },
  {
    id: 2,
    name: 'Antonio',
    hairColor: 'black',
    hairLength: 'short',
    glasses: false,
    gender: 'male',
    earrings: false,
    moustache: true,
    beard: false,
    img: './assets/quien-soy/people/antonio.png'
  },
  {
    id: 3,
    name: 'Beatriz',
    hairColor: 'red',
    hairLength: 'long',
    glasses: false,
    gender: 'female',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/beatriz.png'
  },
  {
    id: 4,
    name: 'Carlos',
    hairColor: 'black',
    hairLength: 'long',
    glasses: false,
    gender: 'male',
    earrings: false,
    moustache: false,
    beard: true,
    img: './assets/quien-soy/people/carlos.png'
  },
  {
    id: 5,
    name: 'Carmen',
    hairColor: 'red',
    hairLength: 'long',
    glasses: false,
    gender: 'female',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/carmen.png'
  },
  {
    id: 6,
    name: 'Clara',
    hairColor: 'brown',
    hairLength: 'long',
    glasses: false,
    gender: 'female',
    earrings: true,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/clara.png'
  },
  {
    id: 7,
    name: 'Cristina',
    hairColor: 'black',
    hairLength: 'long',
    glasses: false,
    gender: 'female',
    earrings: true,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/cristina.png'
  },
  {
    id: 8,
    name: 'Daniel',
    hairColor: 'black',
    hairLength: 'long',
    glasses: false,
    gender: 'male',
    earrings: false,
    moustache: true,
    beard: false,
    img: './assets/quien-soy/people/daniel.png'
  },
  {
    id: 9,
    name: 'Elena',
    hairColor: 'red',
    hairLength: 'long',
    glasses: true,
    gender: 'female',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/elena.png'
  },
  {
    id: 10,
    name: 'Elsa',
    hairColor: 'black',
    hairLength: 'long',
    glasses: true,
    gender: 'female',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/elsa.png'
  },
  {
    id: 11,
    name: 'Hector',
    hairColor: 'black',
    hairLength: 'long',
    glasses: true,
    gender: 'male',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/hector.png'
  },
  {
    id: 12,
    name: 'Irene',
    hairColor: 'black',
    hairLength: 'long',
    glasses: false,
    gender: 'female',
    earrings: true,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/irene.png'
  },
  {
    id: 13,
    name: 'Ivan',
    hairColor: 'blonde',
    hairLength: 'short',
    glasses: true,
    gender: 'male',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/ivan.png'
  },
  {
    id: 14,
    name: 'Jorge',
    hairColor: 'brown',
    hairLength: 'short',
    glasses: false,
    gender: 'male',
    earrings: false,
    moustache: false,
    beard: true,
    img: './assets/quien-soy/people/jorge.png'
  },
  {
    id: 15,
    name: 'Juán',
    hairColor: 'black',
    hairLength: 'short',
    glasses: false,
    gender: 'male',
    earrings: false,
    moustache: true,
    beard: false,
    img: './assets/quien-soy/people/juan.png'
  },
  {
    id: 16,
    name: 'Julia',
    hairColor: 'blonde',
    hairLength: 'long',
    glasses: true,
    gender: 'female',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/julia.png'
  },
  {
    id: 17,
    name: 'Lucas',
    hairColor: 'red',
    hairLength: 'long',
    glasses: true,
    gender: 'male',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/lucas.png'
  },
  {
    id: 18,
    name: 'Lucía',
    hairColor: 'brown',
    hairLength: 'long',
    glasses: false,
    gender: 'female',
    earrings: true,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/lucia.png'
  },
  {
    id: 19,
    name: 'Luis',
    hairColor: 'black',
    hairLength: 'short',
    glasses: false,
    gender: 'male',
    earrings: false,
    moustache: false,
    beard: true,
    img: './assets/quien-soy/people/luis.png'
  },
  {
    id: 20,
    name: 'Mariano',
    hairColor: 'red',
    hairLength: 'short',
    glasses: false,
    gender: 'male',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/mariano.png'
  },
  {
    id: 21,
    name: 'Marina',
    hairColor: 'brown',
    hairLength: 'long',
    glasses: true,
    gender: 'female',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/marina.png'
  },
  {
    id: 22,
    name: 'Miguel',
    hairColor: 'blonde',
    hairLength: 'long',
    glasses: false,
    gender: 'male',
    earrings: false,
    moustache: false,
    beard: true,
    img: './assets/quien-soy/people/miguel.png'
  },
  {
    id: 23,
    name: 'Pablo',
    hairColor: 'black',
    hairLength: 'short',
    glasses: true,
    gender: 'male',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/pablo.png'
  },
  {
    id: 24,
    name: 'Rocío',
    hairColor: 'black',
    hairLength: 'long',
    glasses: false,
    gender: 'female',
    earrings: false,
    moustache: false,
    beard: false,
    img: './assets/quien-soy/people/rocio.png'
  }
];
const quienSoyGame = document.querySelector('.quienSoyGame');

export const clearPrintPeople = () => {
  const quienSoyCards = document.getElementById('quienSoyCards');
  if (quienSoyCards) {
    const quienSoyGame = document.querySelector('.quienSoyGame');
    quienSoyGame.removeChild(quienSoyCards);
  }
};

export const printPeople = () => {
  const quienSoyGame = document.querySelector('.quienSoyGame');
  const quienSoyCards = document.createElement('div')
  quienSoyCards.id = 'quienSoyCards';
  quienSoyGame.appendChild(quienSoyCards)

  for (const character of peopleFilter) {
    const characterCard = document.createElement('div')
    characterCard.className = 'characterCard'
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')

    img.src = character.img
    name.textContent = character.name
    quienSoyCards.appendChild(characterCard)
    characterCard.appendChild(imgDiv)
    imgDiv.appendChild(img)
    characterCard.appendChild(name)

    characterCard.addEventListener("click", gameOver)
  }
};