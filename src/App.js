import './App.css'
import Navbar from './components/navbar/Navbar'
import Showcase from './components/Showcase/Showcase'
import Jumbotron from './components/Showcase/Jumbotron'
import Offers from './components/Showcase/Offers'
import CaseStudies from './components/Showcase/CaseStudies'
import GetStarted from './components/Showcase/GetStarted'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Showcase />
            <Jumbotron />
            <Offers />
            <CaseStudies />
            <GetStarted />
            <Footer />
        </div>
    )
}

export default App
