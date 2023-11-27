import { main, userName } from "../../../main";
import { clearPrintPeople, people, printPeople } from "../print-people/print-people";
import { clearPrintQuestions, printQuestions, questions } from "../questions/questions";
import { youWinModal } from "../you-win-modal/you-win-modal";
import './quien-soy-game.css'

export let peopleFilter = people
let questionsFilter = questions

let infoText = 'Bienvenid@...' + ' ' + '¿Comenzamos?';

export let puntuacion = 0;

let randomId = Math.floor(Math.random() * 24) + 1;
let randomName = people[people.id = randomId].name;
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
  misteryClose.src = "/public/assets/quien-soy/people/mistery.jpg"
  quienSoyHead.appendChild(misteryDiv);
  misteryDiv.appendChild(misteryClose);

  // --- PREGUNTAS ---
  printQuestions(questionsFilter);

  // --- INFORMACION ---
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");
  const info = document.createElement("h2");
  info.id = "info";
  info.textContent = infoText;
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
  info.textContent = `🥳 ¡¡Ganamos ${s} puntos!! 🥳`
};
// --- RESTA PUNTOS ---
const restScore = (r) => {
  const info = document.getElementById("info")
  const score = document.getElementById("score")
  puntuacion -= r;
  score.textContent = 'Puntuación:' + ' ' + puntuacion;
  info.textContent = `😞 ¡¡Perdemos ${r} puntos!! 😞`
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

  clearPrintPeople()
  clearPrintQuestions()

  if (e.target.textContent.includes(questions[0].question) && randomGender === "male") {
    peopleFilter = peopleFilter.filter(p => p.gender === "male")
    printPeople()
    sumScore(questions[0].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "Gender")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[0].question) && randomGender !== "male") {
    peopleFilter = peopleFilter.filter(p => p.gender === "female")
    printPeople()
    restScore(questions[0].failure)
    questionsFilter = questionsFilter.filter(q => q.category !== "Gender")
    printQuestions(questionsFilter)
    return
  }

  if (e.target.textContent.includes(questions[1].question) && randomGender === "female") {
    peopleFilter = peopleFilter.filter(p => p.gender === "female")
    printPeople(peopleFilter)
    sumScore(questions[1].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "Gender")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[1].question) && randomGender !== "female") {
    peopleFilter = peopleFilter.filter(p => p.gender === "male")
    printPeople(peopleFilter)
    restScore(questions[1].failure)
    questionsFilter = questionsFilter.filter(q => q.category !== "Gender")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[2].question) && hairColor === "black") {
    peopleFilter = peopleFilter.filter(p => p.hairColor === "black")
    printPeople(peopleFilter)
    sumScore(questions[2].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairColor")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[2].question) && hairColor !== "black") {
    peopleFilter = peopleFilter.filter(p => p.hairColor !== "black");
    printPeople(peopleFilter)
    restScore(questions[2].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== "3")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[3].question) && hairColor === "brown") {
    peopleFilter = peopleFilter.filter(p => p.hairColor === "brown")
    printPeople(peopleFilter)
    sumScore(questions[3].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairColor")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[3].question) && hairColor !== "brown") {
    peopleFilter = peopleFilter.filter(p => p.hairColor !== "brown");
    printPeople(peopleFilter)
    restScore(questions[3].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== "4")
    printQuestions(questionsFilter)
    return
  }

  else if (e.target.textContent.includes(questions[4].question) && hairColor === "blonde") {
    peopleFilter = peopleFilter.filter(p => p.hairColor === "blonde")
    printPeople(peopleFilter)
    sumScore(questions[4].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairColor")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[4].question) && hairColor !== "blonde") {
    peopleFilter = peopleFilter.filter(p => p.hairColor !== "blonden");
    printPeople(peopleFilter)
    restScore(questions[4].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== "5")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[5].question) && hairColor === "red") {
    peopleFilter = peopleFilter.filter(p => p.hairColor === "red")
    printPeople(peopleFilter)
    sumScore(questions[5].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairColor")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[5].question) && hairColor !== "red") {
    peopleFilter = peopleFilter.filter(p => p.hairColor !== "red");
    printPeople(peopleFilter)
    restScore(questions[5].failure)
    questionsFilter = questionsFilter.filter(q => q.id !== "6")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[6].question) && hairLength === "short") {
    peopleFilter = peopleFilter.filter(p => p.hairLength === "short")
    printPeople(peopleFilter)
    sumScore(questions[6].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairLong")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[6].question) && hairLength !== "short") {
    peopleFilter = peopleFilter.filter(p => p.hairLength !== "short");
    printPeople(peopleFilter)
    restScore(questions[6].failure)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairLong")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[7].question) && hairLength === "long") {
    peopleFilter = peopleFilter.filter(p => p.hairLength === "long")
    printPeople(peopleFilter)
    sumScore(questions[7].success)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairLong")
    printQuestions(questionsFilter)
    return
  }
  else if (e.target.textContent.includes(questions[7].question) && hairLength !== "long") {
    peopleFilter = peopleFilter.filter(p => p.hairLength !== "long");
    printPeople(peopleFilter)
    restScore(questions[7].failure)
    questionsFilter = questionsFilter.filter(q => q.category !== "HairLong")
    printQuestions(questionsFilter)
    return
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