import React from "react"
import { FaPlaneArrival } from 'react-icons/fa'
const About = () => {
    return(
        <div className = " bg-warning text-center text-dark" id="about">
            <div className = "container align-items-center flex-column">
                <div className = "row">
                    <div className = "col-lg-6 ">
                        <h4 className = "mt-2">About Us</h4>
                        <p className = "m-3">This is a simple react app where we can calculate our carbonfootprint</p>
                        
                    </div>
                    <div className = "col-lg-6 ">
                        <h4>Connect With us</h4>
                        <a className="btn btn-outline-light btn-social m-2" href="#footer"><FaPlaneArrival/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About