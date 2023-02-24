import {createContext} from "react";

export const QuizContext = createContext(null);

export const QuizProvider = ({children}) => {
    const values = {
        name: 'QuizProvider',
    }
    return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
}
