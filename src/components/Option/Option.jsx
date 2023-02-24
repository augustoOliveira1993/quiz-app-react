import {useContext} from "react";
import {QuizContext} from "../../contexts/Quiz.jsx";

import './Option.css';

export const Option = ({ option }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="option">
            <h4>{ option }</h4>
        </div>
    );
};
