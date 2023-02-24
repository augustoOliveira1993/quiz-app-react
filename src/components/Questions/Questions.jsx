import './Questions.css'
import {useContext} from "react";
import {QuizContext} from "../../contexts/Quiz.jsx";
import {Option} from "../Option/Option.jsx";


export const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    return (
        <div id="questions">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-contatiner">
                {currentQuestion.options.map((option, index) => {
                   return <Option option={option} key={option} />
                })}

            </div>
            <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>Continuar</button>
        </div>
    );
};
