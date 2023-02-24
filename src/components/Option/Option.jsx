import {useContext} from "react";
import {QuizContext} from "../../contexts/Quiz.jsx";

import './Option.css';

export const Option = ({option, answer, selectOption}) => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div
            onClick={() => selectOption(answer)}
            className={`
            option
            ${quizState.answerSelected && option === answer ? 'correct' : ''} ${
            quizState.answerSelected && option !== answer ? 'wrong' : ''
            }`}
        >
            <h4>{option}</h4>
        </div>
    );
};
