import React, { useState } from 'react'
import './App.css'

function App() {
  const [showFinalResult, setFinalResult] = useState(false)
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [dogruYanlis, setDogruYanlis] = useState([]);
  const questions = [
    {
      text: "I see myself as a successful person.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },

      ],
    },
    {
      text: "I can control my excitement around other people.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I can deal with difficulties in life.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I do not hesitate to participate in social events.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I can express myself comfortably.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I do not hesitate to take responsibility.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I love myself.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
  ];
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      console.log("Durum -->", isCorrect)
      // Cevap doğru ise +1 ekliyor
      // setDogruYanlis(oldItems => [...oldItems, isCorrect]);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      console.log("Durum -->", isCorrect)
      // setDogruYanlis(oldItems => [...oldItems, isCorrect]);

    } else {
      setFinalResult(true);
    }
  }
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Özgüven Testi</h1>
        <h2>Skorunuz : {score} </h2>

        {
          showFinalResult ? (
            <div className="result">
              <h1>Result</h1>
              <h2>{score} out of {questions.length} you are - {((score / questions.length) * 100).toFixed(2)}% - self confident</h2>
              <button onClick={() => restartGame()}>Restart Test</button>
            </div>
          ) : (
            <div className="question-card">
              <h2>
                Question {currentQuestion + 1} out of {questions.length}
              </h2>
              <h3>{questions[currentQuestion].text}</h3>
              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      onClick={() => optionClicked(option.isCorrect)}
                      key={option.id}
                    >
                      {option.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        {/* <div className="sonucdizisi">
          {dogruYanlis} fdgdfg
        </div> */}
      </div>

    </div>
  )
}

export default App
