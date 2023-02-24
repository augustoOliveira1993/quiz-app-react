import { useContext} from "react";
import {QuizContext} from "../../contexts/Quiz.jsx";

import wellDone from "../../assets/welldone.svg";
import './GameOver.css';
export const GameOver = () => {
    return (
        <div id="game-over">
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: 100</p>
            <p>Voçê acertou 2 de 5 perguntas...</p>
            <img src={wellDone} alt="Well Done" />
            <button>Reiniciar</button>
        </div>
    );
};
