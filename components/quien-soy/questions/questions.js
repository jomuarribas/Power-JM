import { quienSoyQuestions } from "../quien-soy-game/quien-soy-game";

export const questions = [
  {
    id: '1',
    question: '¿Soy un chico?',
    success: 10,
    failure: 10,
    category: 'Gender'
  },
  {
    id: '2',
    question: '¿Soy una chica?',
    success: 10,
    failure: 10,
    category: 'Gender'
  },
  {
    id: '3',
    question: '¿Tengo el pelo negro?',
    success: 10,
    failure: 10,
    category: "HairColor"
  },
  {
    id: '4',
    question: '¿Tengo el pelo marrón?',
    success: 10,
    failure: 10,
    category: "HairColor"
  },
  {
    id: '5',
    question: '¿Tengo el pelo rubio?',
    success: 10,
    failure: 10,
    category: "HairColor"
  },
  {
    id: '6',
    question: '¿Tengo el pelo pelirojo?',
    success: 10,
    failure: 10,
    category: "HairColor"
  },
  {
    id: '7',
    question: '¿Tengo el pelo corto?',
    success: 10,
    failure: 10,
    category: 'HairLong'
  },
  {
    id: '8',
    question: '¿Tengo el pelo largo?',
    success: 10,
    failure: 10,
    category: 'HairLong'
  },
  {
    id: '9',
    question: '¿Tengo gafas?',
    success: 15,
    failure: 15,
    category: 'Accesories'
  },
  {
    id: '10',
    question: '¿Tengo barba?',
    success: 15,
    failure: 15,
    category: 'Accesories'
  },
  {
    id: '11',
    question: '¿Tengo bigote?',
    success: 15,
    failure: 15,
    category: 'Accesories'
  },
  {
    id: '12',
    question: '¿Tengo pendientes?',
    success: 15,
    failure: 15,
    category: 'Accesories'
  }
]

export const clearPrintQuestions = () => {
  const questionDiv = document.querySelector('.questionsDiv');
  if (questionDiv) {
    quienSoyHead.removeChild(questionDiv)
  }
};
export const printQuestions = (questions) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("questionsDiv");
  quienSoyHead.appendChild(questionDiv);

  for (const question of questions) {
    const questionP = document.createElement("p");
    questionP.textContent = question.question
    questionDiv.appendChild(questionP);
  }

  questionDiv.addEventListener("click", quienSoyQuestions)
}