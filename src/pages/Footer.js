import React from "react"
// import {Footer} from "react-bootstrap"
import { FaMailBulk,FaLinkedinIn,FaLandmark } from 'react-icons/fa'

const Footer = () => {
    return(
        <footer className = "footer bg-dark text-center text-white" id="footer">
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-9">
                        <h4>Location</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href = "#home"><FaLandmark/></a>
                        <p>N0029</p>
                        <p>Ekkari Singharoy road, Uluberia, Howrah</p>
                        <p>Pin-711316</p>
                    </div>
                    <div className = "col-lg-3">
                        <h4>Connect with us</h4>
                        <a className="btn btn-outline-light btn-social mx-1"><FaMailBulk/></a>
                        <a className="btn btn-outline-light btn-social mx-1"><FaLinkedinIn/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer