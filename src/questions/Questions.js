import { getRandomInt, getRandomQuestion } from "../utils/HelperFunctions";
import { useState } from "react";

export function Question(props) {
  function switchQuestion() {
    props.setQuestionType(getRandomInt(5));
    props.setQuestion(getRandomQuestion(props.questionType));
  }
  var question = <></>;
  const [randomInt, setRandomInt] = useState(getRandomInt(4));
  switch (randomInt) {
    case 0:
      question = (
        <div>
          <h1>{props.text}</h1>
          <button
            onClick={() => {
              props.setScore(props.score + 1);
              switchQuestion();
            }}
          >
            {props.correctAnswer}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa1}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa2}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa3}
          </button>
        </div>
      );
      break;
    case 1:
      question = (
        <div>
          <h1>{props.text}</h1>
          <button>{props.wa1}</button>
          <button
            onClick={() => {
              props.setScore(props.score + 1);
              switchQuestion();
            }}
          >
            {props.correctAnswer}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa2}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa3}
          </button>
        </div>
      );
      break;
    case 2:
      question = (
        <div>
          <h1>{props.text}</h1>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa1}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa2}
          </button>
          <button
            onClick={() => {
              props.setScore(props.score + 1);
              switchQuestion();
            }}
          >
            {props.correctAnswer}
          </button>
          <button onClick={() => switchQuestion()}>{props.wa3}</button>
        </div>
      );
      break;
    case 3:
      question = (
        <div>
          <h1>{props.text}</h1>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa1}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa2}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa3}
          </button>
          <button
            onClick={() => {
              props.setScore(props.score + 1);
              switchQuestion();
            }}
          >
            {props.correctAnswer}
          </button>
        </div>
      );
      break;
    default:
      question = (
        <div>
          <h1>{props.text}</h1>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa1}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa2}
          </button>
          <button
            onClick={() => {
              switchQuestion();
            }}
          >
            {props.wa3}
          </button>
          <button
            onClick={() => {
              props.setScore(props.score + 1);
              switchQuestion();
            }}
          >
            {props.correctAnswer}
          </button>
        </div>
      );
      break;
  }
  return question;
}
