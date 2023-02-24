import {useContext} from "react";
import {QuizContext} from "../../contexts/Quiz.jsx";

import QuizImg from '../../assets/quiz.svg';
import './Welcome.css';

export const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div id="welcome">
            <h2>Seja bem-vindo, {name}</h2>
            <p>Clique no botão abaixo para comerçar:</p>
            <button onClick={() => dispatch({ type: "CHANGE_STAGE"})}>Iniciar</button>
            <img src={QuizImg} alt="Inicio do Quiz"/>
        </div>
    );
};
