import {useState} from 'react'
import './App.css'
import {Index} from "./components/Welcome/Index.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>Quiz de Programação</h1>
            <Index/>
        </div>
    )
}

export default App
