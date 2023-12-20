import { main, userName } from "../../../main";
import { clearPrintPeople, people, printPeople } from "../print-people/print-people";
import { printQuestions, printQuestions2, questions } from "../questions/questions";
import { youWinModal } from "../you-win-modal/you-win-modal";
import './quien-soy-game.css'

export let peopleFilter = people
export let questionsFilter = questions
export let questionsFilter2 = []

export let puntuacion = 0;

let randomId;

export let randomName = ''
let randomGender = ''
let randomHairColor = ''
let randomHairLength = ''
let randomAccesories = ''

const random = () => {
  randomId = Math.floor(Math.random() * 24)

  randomName = people[randomId].name;
  randomGender = people[randomId].gender;
  randomHairColor = people[randomId].hairColor;
  randomHairLength = people[randomId].hairLength;
  randomAccesories = people[randomId].accesories;
}
random()

export const quienSoyLaunch = () => {
  main.innerHTML = ''
  puntuacion = 0;
  questionsFilter2 = []

  random();

  const quienSoyGame = document.createElement('section')
  quienSoyGame.classList.add('quienSoyGame');
  main.appendChild(quienSoyGame);

  const quienSoyHead = document.createElement("div");
  quienSoyHead.id = "quienSoyHead";
  quienSoyGame.appendChild(quienSoyHead);

  // --- TITULO---
  const title = document.createElement("h2");
  title.textContent = '¿Quien soy...?';
  quienSoyHead.appendChild(title);

  // --- FICHA MISTERIOSA ---
  const misteryDiv = document.createElement("div");
  misteryDiv.classList.add('misteryDiv');
  const misteryClose = document.createElement("img");
  misteryClose.classList.add('misteryClose');
  misteryClose.src = "./assets/quien-soy/people/mistery.jpg"
  quienSoyHead.appendChild(misteryDiv);
  misteryDiv.appendChild(misteryClose);

  // --- PREGUNTAS ---
  printQuestions();

  // --- INFORMACION ---
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");
  const info = document.createElement("h2");
  info.id = "info";
  info.textContent = `${localStorage.getItem('Nombre')} ¿Comenzamos?`;
  infoDiv.appendChild(info);
  quienSoyGame.appendChild(infoDiv);

  // --- PUNTUACION ---
  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("scoreDiv");
  const score = document.createElement("h2");
  score.id = "score"
  score.textContent = 'Puntuación:' + ' ' + puntuacion;
  scoreDiv.appendChild(score);
  quienSoyGame.appendChild(scoreDiv);

  // --- PERSONAJES ---
  printPeople();
}

// --- SUMA PUNTOS ---
const sumScore = (s) => {
  const infoDiv = document.querySelector('.infoDiv')
  const info = document.getElementById("info")
  const score = document.getElementById("score")
  infoDiv.style.backgroundColor = 'green';
  setTimeout(() => {
    infoDiv.style.backgroundColor = 'black';
  }, 1000);
  puntuacion += s;
  score.textContent = 'Puntuación:' + ' ' + puntuacion;
  info.textContent = `🥳 ¡¡Ganas ${s} puntos!! 🥳`
};
// --- RESTA PUNTOS ---
const restScore = (r) => {
  const infoDiv = document.querySelector('.infoDiv')
  const info = document.getElementById("info")
  const score = document.getElementById("score")
  infoDiv.style.backgroundColor = 'red';
  setTimeout(() => {
    infoDiv.style.backgroundColor = 'black';
  }, 1000);
  puntuacion -= r;
  score.textContent = 'Puntuación:' + ' ' + puntuacion;
  info.textContent = `😞 ¡¡Pierdes ${r} puntos!! 😞`
};

// --- CUANDO ACIERTAS EL PERSONAJE ---
const congratulations = () => {
  const misteryDiv = document.querySelector(".misteryDiv")
  misteryDiv.innerHTML = "";
  const misteryImg = document.createElement("img");
  misteryImg.classList.add("misteryImg");
  const misteryName = document.createElement("h2");
  misteryName.classList.add("misteryName");
  misteryImg.src = people[randomId].img
  misteryName.textContent = randomName
  misteryDiv.appendChild(misteryImg)
  misteryDiv.appendChild(misteryName);

  const quienSoyCards = document.getElementById("quienSoyCards");
  quienSoyCards.style.pointerEvents = 'none';
  const questionsDiv = document.querySelector('.questionsDiv');
  questionsDiv.style.pointerEvents = 'none';

  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  peopleFilter = people
  questionsFilter = questions
}

// --- CUANDO PULSAS UN PERSONAJE ---
export const gameOver = (e) => {
  const infoDiv = document.querySelector('.infoDiv')
  if (e.target.children[1].innerText === randomName) {
    infoDiv.style.backgroundColor = 'black';
    congratulations();
    sumScore(50);
    info.textContent = `¡¡Genial ${userName} ya sabes quien soy!!`
    youWinModal();
  } else {
    restScore(20)
    info.textContent = `Lo siento pero no soy ${e.target.children[1].textContent}`
    peopleFilter = peopleFilter.filter(p => p.name !== e.target.children[1].innerText)
    clearPrintPeople()
    printPeople()
  }

};

// --- LOGICA EN LAS PREGUNTAS ---
export const quienSoyQuestions = (e) => {
  const questionDiv = document.querySelector('.questionsDiv');
  quienSoyHead.removeChild(questionDiv);

  const questionDiv2 = document.querySelector('.questionsDiv2');
  if (questionDiv2) { quienSoyHead.removeChild(questionDiv2) };

  const quienSoyGame = document.querySelector('.quienSoyGame');
  quienSoyGame.removeChild(quienSoyCards);

  const accertGender = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.gender === item)
    printPeople()
    sumScore(questions[q].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "Gender")
    questionsFilter2.push({ question: e.target.textContent })
    printQuestions()
    printQuestions2()
    return
  }
  const failGender = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.gender !== item)
    printPeople()
    restScore(questions[q].failure)
    questionsFilter = questionsFilter.filter(q => q.category !== "Gender")
    questionsFilter2.push({ question: e.target.textContent })
    printQuestions()
    printQuestions2()
    return
  }

  const accertHairColor = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.hairColor === item)
    printPeople()
    sumScore(questions[q].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairColor")
    questionsFilter2.push({ question: e.target.textContent })
    printQuestions()
    printQuestions2()
    return
  }
  const failHairColor = (item, q, id) => {
    peopleFilter = peopleFilter.filter(p => p.hairColor !== item)
    printPeople()
    restScore(questions[q].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== id)
    questionsFilter2.push({ question: e.target.textContent })
    printQuestions()
    printQuestions2()
    return
  }

  const accertHairLength = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.hairLength === item)
    printPeople()
    sumScore(questions[q].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairLong")
    questionsFilter2.push({ question: e.target.textContent })
    printQuestions()
    printQuestions2()
    return
  }
  const failHairLength = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.hairLength !== item)
    printPeople()
    restScore(questions[q].failure)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairLong")
    questionsFilter2.push({ question: e.target.textContent })
    printQuestions()
    printQuestions2()
    return
  }

  const accertAccesories = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.accesories === item)
    printPeople()
    sumScore(questions[q].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "Accesories")
    questionsFilter2.push({ question: e.target.textContent })
    printQuestions()
    printQuestions2()
    return
  }
  const failAccesories = (item, q, accesorie) => {
    peopleFilter = peopleFilter.filter(p => p.accesories !== item)
    printPeople()
    restScore(questions[q].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== accesorie)
    questionsFilter2.push({ question: e.target.textContent })
    printQuestions()
    printQuestions2()
    return
  }

  if (e.target.textContent === questions[0].question) {
    if (randomGender === "male") { accertGender("male", 0) } else { failGender("male", 0) }
  }
  else if (e.target.textContent === questions[1].question) {
    if (randomGender === "female") { accertGender("female", 0) } else { failGender("female", 0) }
  }
  else if (e.target.textContent === questions[2].question) {
    if (randomHairColor === "black") { accertHairColor("black", 2) } else { failHairColor("black", 2, "3") }
  }
  else if (e.target.textContent === questions[3].question) {
    if (randomHairColor === "brown") { accertHairColor("brown", 3,) } else { failHairColor("brown", 3, "4") }
  }
  else if (e.target.textContent === questions[4].question) {
    if (randomHairColor === "blonde") { accertHairColor("blonde", 4) } else { failHairColor("blonde", 4, "5") }
  }
  else if (e.target.textContent === questions[5].question) {
    if (randomHairColor === "red") { accertHairColor("red", 5) } else { failHairColor("red", 5, "6") }
  }
  else if (e.target.textContent === questions[6].question) {
    if (randomHairLength === "short") { accertHairLength("short", 6) } else { failHairLength("short", 6) }
  }
  else if (e.target.textContent === questions[7].question) {
    if (randomHairLength === "long") { accertHairLength("long", 7) } else { failHairLength("long", 7) }
  }
  else if (e.target.textContent === questions[8].question) {
    if (randomAccesories === "glasses") { accertAccesories("glasses", 8) } else { failAccesories("glasses", 8, "9") }
  }
  else if (e.target.textContent === questions[9].question) {
    if (randomAccesories === "beard") { accertAccesories("beard", 9) } else { failAccesories("beard", 9, "10") }
  }
  else if (e.target.textContent === questions[10].question) {
    if (randomAccesories === "moustache") { accertAccesories("moustache", 10) } else { failAccesories("moustache", 10, "11") }
  }
  else if (e.target.textContent === questions[11].question) {
    if (randomAccesories === "earrings") { accertAccesories("earrings", 11) } else { failAccesories("earrings", 11, "12") }
  }
}