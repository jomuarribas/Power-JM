import { main, userName } from "../../../main";
import { clearPrintPeople, people, printPeople } from "../print-people/print-people";
import { clearPrintQuestions, printQuestions, questions } from "../questions/questions";
import { youWinModal } from "../you-win-modal/you-win-modal";
import './quien-soy-game.css'

export let peopleFilter = people
let questionsFilter = questions

export let puntuacion = 0;

let randomId = Math.floor(Math.random() * 24) + 1;
export let randomName = people[people.id = randomId].name;
let randomGender = peopleFilter[peopleFilter.Id = randomId].gender;
let hairColor = peopleFilter[peopleFilter.Id = randomId].hairColor;
let hairLength = peopleFilter[peopleFilter.Id = randomId].hairLength;
let glasses = peopleFilter[peopleFilter.Id = randomId].glasses;
let beard = peopleFilter[peopleFilter.Id = randomId].beard;
let moustache = peopleFilter[peopleFilter.Id = randomId].moustache;
let earrings = peopleFilter[peopleFilter.Id = randomId].earrings;

export const quienSoyLaunch = () => {
  main.innerHTML = ''
  puntuacion = 0;

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
  printQuestions(questionsFilter);

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
  printPeople(people);

}

// --- SUMA PUNTOS ---
const sumScore = (s) => {
  const info = document.getElementById("info")
  const score = document.getElementById("score")
  puntuacion += s;
  score.textContent = 'Puntuación:' + ' ' + puntuacion;
  info.textContent = `🥳 ¡¡Ganas ${s} puntos!! 🥳`
};
// --- RESTA PUNTOS ---
const restScore = (r) => {
  const info = document.getElementById("info")
  const score = document.getElementById("score")
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
  misteryImg.src = people[people.id = randomId].img
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
  const info = document.getElementById("info")
  if (e.target.nextElementSibling.outerText === randomName) {
    congratulations();
    sumScore(50);
    info.textContent = `¡¡Genial ${userName} ya sabes quien soy!!`
    youWinModal();
  } else {
    info.textContent = `Lo siento pero no soy ${e.target.nextElementSibling.outerText}`
    restScore(20)
  }

};

// --- LOGICA EN LAS PREGUNTAS ---
export const quienSoyQuestions = (e) => {
  console.log(e)

  const questionDiv = document.querySelector('.questionsDiv');
  quienSoyHead.removeChild(questionDiv)

  const quienSoyGame = document.querySelector('.quienSoyGame');
  quienSoyGame.removeChild(quienSoyCards);

  const accertGender = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.gender === item)
    printPeople()
    sumScore(questions[q].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "Gender")
    printQuestions(questionsFilter)
    return
  }
  const failGender = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.gender === item)
    printPeople()
    restScore(questions[q].failure)
    questionsFilter = questionsFilter.filter(q => q.category !== "Gender")
    printQuestions(questionsFilter)
    return
  }

  const accertHairColor = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.hairColor === item)
    printPeople()
    sumScore(questions[q].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairColor")
    printQuestions(questionsFilter)
    return
  }
  const failHairColor = (item, q, id) => {
    peopleFilter = peopleFilter.filter(p => p.hairColor !== item)
    printPeople()
    restScore(questions[q].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== id)
    printQuestions(questionsFilter)
    return
  }

  const accertHairLength = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.hairLength === item)
    printPeople()
    sumScore(questions[q].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairLong")
    printQuestions(questionsFilter)
    return
  }
  const failHairLength = (item, q) => {
    peopleFilter = peopleFilter.filter(p => p.hairLength !== item)
    printPeople()
    restScore(questions[q].failure)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairLong")
    printQuestions(questionsFilter)
    return
  }

  if (e.target.textContent.includes(questions[0].question) && randomGender === "male") {
    accertGender("male", 0)
  }
  else if (e.target.textContent.includes(questions[0].question) && randomGender !== "male") {
    failGender("female", 0)
  }
  if (e.target.textContent.includes(questions[1].question) && randomGender === "female") {
    accertGender("female", 1)
  }
  else if (e.target.textContent.includes(questions[1].question) && randomGender !== "female") {
    failGender("male", 1)
  }
  else if (e.target.textContent.includes(questions[2].question) && hairColor === "black") {
    accertHairColor("black", 2)
  }
  else if (e.target.textContent.includes(questions[2].question) && hairColor !== "black") {
    failHairColor("black", 2, "3")
  }
  else if (e.target.textContent.includes(questions[3].question) && hairColor === "brown") {
    accertHairColor("brown", 3,)
  }
  else if (e.target.textContent.includes(questions[3].question) && hairColor !== "brown") {
    failHairColor("brown", 3, "4")
  }
  else if (e.target.textContent.includes(questions[4].question) && hairColor === "blonde") {
    accertHairColor("blonde", 4)
  }
  else if (e.target.textContent.includes(questions[4].question) && hairColor !== "blonde") {
    failHairColor("blonde", 4, "5")
  }
  else if (e.target.textContent.includes(questions[5].question) && hairColor === "red") {
    accertHairColor("red", 5)
  }
  else if (e.target.textContent.includes(questions[5].question) && hairColor !== "red") {
    failHairColor("red", 5, "6")
  }
  else if (e.target.textContent.includes(questions[6].question) && hairLength === "short") {
    accertHairLength("short", 6)
  }
  else if (e.target.textContent.includes(questions[6].question) && hairLength !== "short") {
    failHairLength("short", 6)
  }
  else if (e.target.textContent.includes(questions[7].question) && hairLength === "long") {
    accertHairLength("long", 7)
  }
  else if (e.target.textContent.includes(questions[7].question) && hairLength !== "long") {
    failHairLength("long", 7)
  }
  else if (e.target.textContent.includes(questions[8].question) && glasses) {
    peopleFilter = peopleFilter.filter(p => p.glasses)
    printPeople(peopleFilter)
    sumScore(questions[8].success)
    questionsFilter = questionsFilter.filter(q => q.id !== "9")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[8].question) && glasses === false) {
    peopleFilter = peopleFilter.filter(p => p.glasses === false);
    printPeople(peopleFilter)
    restScore(questions[8].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== "9")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[9].question) && beard) {
    peopleFilter = peopleFilter.filter(p => p.beard)
    printPeople(peopleFilter)
    sumScore(questions[9].success)
    questionsFilter = questionsFilter.filter(q => q.id !== "10")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[9].question) && beard === false) {
    peopleFilter = peopleFilter.filter(p => p.beard === false);
    printPeople(peopleFilter)
    restScore(questions[9].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== "10")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[10].question) && moustache) {
    peopleFilter = peopleFilter.filter(p => p.moustache)
    printPeople(peopleFilter)
    sumScore(questions[10].success)
    questionsFilter = questionsFilter.filter(q => q.id !== "11")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[10].question) && moustache === false) {
    peopleFilter = peopleFilter.filter(p => p.moustache === false);
    printPeople(peopleFilter)
    restScore(questions[10].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== "11")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[11].question) && earrings) {
    peopleFilter = peopleFilter.filter(p => p.earrings)
    printPeople(peopleFilter)
    sumScore(questions[11].success)
    questionsFilter = questionsFilter.filter(q => q.id !== "12")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[11].question) && earrings === false) {
    peopleFilter = peopleFilter.filter(p => p.earrings === false);
    printPeople(peopleFilter)
    restScore(questions[11].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== "12")
    printQuestions(questionsFilter)
    return
  }


}