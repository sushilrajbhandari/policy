// import React from 'react';
// import  {Navbar, Nav} from 'react-bootstrap';

// class NavBar extends React.Component{
   
    
//     render(){
//        return (
//             <Navbar bg="primary" variant="dark">
//                 <Navbar.Brand href="#home">Quotes</Navbar.Brand>
//                 <Nav className="mr-auto">
//                     <Nav.Link href="#home">Auto</Nav.Link>
//                 </Nav>                
//             </Navbar>           
//         )
//     } 
//   }
// export default NavBar;

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
