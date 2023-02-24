import './Questions.css'
import {useContext} from "react";
import {QuizContext} from "../../contexts/Quiz.jsx";


export const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div>Question</div>
    );
};
