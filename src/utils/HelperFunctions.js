import {
  ChemistryQuestions,
  GeographyQuestions,
  HistoryQuestions,
  MathQuestions,
  PhysicsQuestions,
} from "../questions/QuestionsLists";

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const pickedQuestions = [];

export function getRandomQuestion(questionType) {
  while (true) {
    var questions = [];
    switch (questionType) {
      case 0:
        questions = MathQuestions;
        break;
      case 1:
        questions = PhysicsQuestions;
        break;
      case 2:
        questions = ChemistryQuestions;
        break;
      case 3:
        questions = GeographyQuestions;
        break;
      case 4:
        questions = HistoryQuestions;
        break;
      default:
        questions = MathQuestions;
        break;
    }
    const questionIndex = getRandomInt(questions.length);
    if (pickedQuestions.includes([questionType, questionIndex])) {
      continue;
    }
    if (pickedQuestions.length === 50) return null;
    const question = questions[questionIndex];
    pickedQuestions.push([questionType, questionIndex]);
    return question;
  }
}
