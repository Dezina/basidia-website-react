import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <div className="bg-container">
                                <h3>We Design and Develop</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur perspiciatis quis pariatur, officiis nam fugiat? Harum suscipit a numquam qui quos delectus, excepturi quidem placeat dolor culpa amet voluptas!</p>
                                <p className="text-center"> <Link to="/ContactUs" className="button">Contact Us</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;