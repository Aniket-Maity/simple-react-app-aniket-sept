import React from "react"
import Navigation from "./pages/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import Masthead from "./pages/Masthead";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Features from "./pages/Features";
import CarbonFootprintInfo from "./pages/CarbonFootprintInfo";
import ReduceCarbonFootprintInfo from "./pages/ReduceCarbonFootprintInfo";


const App = () => {
    return(
        <div id = "home">
            <Navigation/>
            <Masthead/>
            <Features/>
            <CarbonFootprintInfo/>
            <ReduceCarbonFootprintInfo/>
            <About/>
            <Footer/>
        </div>
    )
}

export default App