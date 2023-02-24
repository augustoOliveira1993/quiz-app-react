import { createContext, useReducer } from "react";
import questions from "../data/questions.js";

const STAGES = ['start', 'playing', 'end'];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
}

const quizReducer = (state, action) => {
    console.log('quizReducer', state, action)
    switch (action.type) {
        case 'CHANGE_STAGE':
            return {
                ...state,
                gameStage: STAGES[1],
            };
        default:
            return state;
    }
}
export const QuizContext = createContext(null);

export const QuizProvider = ({children}) => {
    const values = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
}
