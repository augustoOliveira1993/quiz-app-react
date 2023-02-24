import { useContext} from "react";
import {QuizContext} from "../../contexts/Quiz.jsx";

import wellDone from "../../assets/welldone.svg";
import './GameOver.css';
export const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div id="game-over">
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Voçê acertou {quizState.score} de {quizState.questions.length} perguntas...</p>
            <img src={wellDone} alt="Well Done" />
            <button onClick={() => dispatch({ type: 'NEW_GAME'})}>Reiniciar</button>
        </div>
    );
};
