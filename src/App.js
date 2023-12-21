import { useState } from "react";
import "./App.css";
import { getRandomInt, getRandomQuestion } from "./utils/HelperFunctions";
import { Question } from "./questions/Questions";

function App() {
  const [score, setScore] = useState(0);
  const [questionType, setQuestionType] = useState(getRandomInt(5));
  const [question, setQuestion] = useState(getRandomQuestion(questionType));
  var randomQuestionElement = (
    <Question
      text={question.text}
      correctAnswer={question.correctAnswer}
      wa1={question.wa1}
      wa2={question.wa2}
      wa3={question.wa3}
      score={score}
      setScore={setScore}
      question={question}
      setQuestion={setQuestion}
      questionType={questionType}
      setQuestionType={setQuestionType}
    />
  );
  return (
    <div className="main_container">
      {randomQuestionElement}
      <p>Your score is: {score}</p>
    </div>
  );
}

export default App;
