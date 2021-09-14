import React from "react"
import {Container} from "react-bootstrap"


const Masthead = () => {
    return(
        <header className="masthead bg-success text-white text-center">
        <div className="jumbotron d-flex align-items-center flex-column">
            <h1 className = "mt-5">Welcome to SimpleReactApp</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"></div>
                <div className="divider-custom-line"></div>
            </div>
            <h4 className="font-weight-bold m-5">This is a simple react app where we can calculate our carbonfootprint</h4>
        </div>
        </header>
    )
}

export default Masthead