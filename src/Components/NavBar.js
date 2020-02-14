import React from 'react'
import { withRouter, Link } from 'react-router-dom'

export default function NavBar() {

    const linkStyle = {
        color:"white"
    }
    return (
        <nav style = {{"marginBottom" : '30px'}}>
            <h3>Quotes</h3>
            <ul className="nav-links">
                <Link style = {linkStyle} to = "/CustomerAndVehicleDetail"><li>Auto</li></Link>
                <Link style = {linkStyle} to = "/policy"><li>Policies</li></Link>
                <Link style = {linkStyle} to = "/"><li>Login</li></Link>
                <Link style = {linkStyle} to = "/"><li>Logout</li></Link>
            </ul>
            
        </nav>
    )
}
