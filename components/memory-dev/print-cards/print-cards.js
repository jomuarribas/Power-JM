import { memoryDevPlay } from "../memory-dev-game/memory-dev-game";
import "./print-cards.css";

const cards = [
  { id: 1, img: '/assets/memory-dev/cards/angular.jpg' },
  { id: 2, img: '/assets/memory-dev/cards/css.jpg' },
  { id: 3, img: '/assets/memory-dev/cards/html.jpg' },
  { id: 4, img: '/assets/memory-dev/cards/javascript.jpg' },
  { id: 5, img: '/assets/memory-dev/cards/node.jpg' },
  { id: 6, img: '/assets/memory-dev/cards/python.jpg' },
  { id: 7, img: '/assets/memory-dev/cards/react.jpg' },
  { id: 8, img: '/assets/memory-dev/cards/vue.jpg' },
  { id: 9, img: '/assets/memory-dev/cards/angular.jpg' },
  { id: 10, img: '/assets/memory-dev/cards/css.jpg' },
  { id: 11, img: '/assets/memory-dev/cards/html.jpg' },
  { id: 12, img: '/assets/memory-dev/cards/javascript.jpg' },
  { id: 13, img: '/assets/memory-dev/cards/node.jpg' },
  { id: 14, img: '/assets/memory-dev/cards/python.jpg' },
  { id: 15, img: '/assets/memory-dev/cards/react.jpg' },
  { id: 16, img: '/assets/memory-dev/cards/vue.jpg' }
];
export const printCards = () => {

  cards.sort((a, b) => Math.random() - 0.5);

  const memoryDevGame = document.getElementById('memoryDevGame');
  for (const card of cards) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('memoryCard');
    const cardDiv2 = document.createElement('div');
    cardDiv2.classList.add('card');
    const frontCard = document.createElement('img');
    frontCard.classList.add('frontCard');
    frontCard.src = card.img;
    const backCard = document.createElement('img');
    backCard.classList.add('backCard');
    backCard.src = '/assets/memory-dev/cards/back.jpg'

    memoryDevGame.appendChild(cardDiv);
    cardDiv.appendChild(cardDiv2);
    cardDiv2.appendChild(frontCard);
    cardDiv2.appendChild(backCard);

    cardDiv.addEventListener('click', (e) => {
      memoryDevPlay(e);
    });
  }
};