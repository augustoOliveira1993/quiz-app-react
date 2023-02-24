import QuizImg from '../../assets/quiz.svg';
import './Welcome.css';
export const Index = () => {
    return (
        <div id="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para comerçar:</p>
            <button>Iniciar</button>
            <img src={QuizImg} alt="Inicio do Quiz"/>
        </div>
    );
};
