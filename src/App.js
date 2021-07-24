import './App.css'
import Navbar from './components/navbar/Navbar'
import Showcase from './components/Showcase/Showcase'
import Jumbotron from './components/Showcase/Jumbotron'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Showcase />
            <Jumbotron />
        </div>
    )
}

export default App
