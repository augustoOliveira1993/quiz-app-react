import './App.css'
import {Welcome} from "./components/Welcome/Welcome.jsx";

import {useContext, useEffect} from "react";
import {QuizContext} from "./contexts/Quiz.jsx";
import {Questions} from "./components/Questions/Questions.jsx";
import {GameOver} from "./components/GameOver/GameOver.jsx";

function App() {
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
      // random questions
      //   dispatch({ type: "ORDER_QUESTIONS"})
    })
    return (
        <div className="App">
            <h1>Quiz de Programação</h1>
            {quizState.gameStage === "start" && <Welcome />}
            {quizState.gameStage === "playing" && <Questions />}
            {quizState.gameStage === "end" && <GameOver />}
        </div>
    )
}

export default App
