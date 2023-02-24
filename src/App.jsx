import './App.css'
import {Welcome} from "./components/Welcome/Welcome.jsx";

import {useContext} from "react";
import {QuizContext} from "./contexts/Quiz.jsx";
import {Questions} from "./components/Questions/Questions.jsx";

function App() {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="App">
            <h1>Quiz de Programação</h1>
            {quizState.gameStage === "start" && <Welcome />}
            {quizState.gameStage === "playing" && <Questions />}
        </div>
    )
}

export default App
