import React from "react"
import {Container, Navbar,Nav} from "react-bootstrap"
import About from "./pages/About"
import CalculatorForm from "./pages/CalculatorForm"
import Footer from "./pages/Footer"

const CalculatorPage = () => {
    return(
        <div id="home">
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">CalculatorPage</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <h3>Carbon Calculator</h3>
        <CalculatorForm/>
        <About/>
        <Footer/>
        </div>
    )
}

export default CalculatorPage
