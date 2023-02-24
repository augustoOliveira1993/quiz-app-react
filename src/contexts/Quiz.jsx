import {createContext, useReducer} from "react";
import questions from "../data/questions.js";

const STAGES = ['start', 'playing', 'end'];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_STAGE':
            return {
                ...state,
                gameStage: STAGES[1],
            };
        case 'ORDER_QUESTIONS':
            const orderQuestion = state.questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: orderQuestion,
            }
        case 'CHANGE_QUESTION':
            const endGame = state.currentQuestion + 1 === state.questions.length;
            const nextQuestion = state.currentQuestion + 1;
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
            }
        case 'NEW_GAME':
            return initialState;
        default:
            return state;
    }
}
export const QuizContext = createContext(null);

export const QuizProvider = ({children}) => {
    const values = useReducer(
        quizReducer,
        initialState
    );

    return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
}
