import React, { useState } from "react";
import { data } from "../assets/data";
import "./quiz.css";

const Quiz = () => {

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const question = data[index];

  const checkAns = (ans) => {

    if(selected !== null) return;

    setSelected(ans);

    if(ans === question.ans){
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {

    if(index === data.length - 1){
      setResult(true);
      return;
    }

    setIndex(index + 1);
    setSelected(null);
  };

  const resetQuiz = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setResult(false);
  };

  const getClass = (option) => {
    if(selected === null) return "";
    if(option === question.ans) return "correct";
    if(option === selected) return "wrong";
    return "";
  };

  return (
    <div className="container">

      <h1>QUIZ APP</h1>
      <hr/>

      {result ? (
        <>
          <h2>You scored {score} out of {data.length}</h2>
          <button onClick={resetQuiz}>Restart</button>
        </>
      ) : (
        <>
          <h2>{index+1}. {question.question}</h2>

          <ul>
            <li className={getClass(1)} onClick={()=>checkAns(1)}>{question.option1}</li>
            <li className={getClass(2)} onClick={()=>checkAns(2)}>{question.option2}</li>
            <li className={getClass(3)} onClick={()=>checkAns(3)}>{question.option3}</li>
            <li className={getClass(4)} onClick={()=>checkAns(4)}>{question.option4}</li>
          </ul>

          <button onClick={nextQuestion}>Next</button>

          <div className="index">{index+1} of {data.length} questions</div>
        </>
      )}

    </div>
  );
};

export default Quiz;