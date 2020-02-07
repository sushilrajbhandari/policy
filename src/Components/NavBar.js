import React from 'react';
import  {Navbar, Nav} from 'react-bootstrap';

class NavBar extends React.Component{
   
    
    render(){
       return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Quotes</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Auto</Nav.Link>
                </Nav>                
            </Navbar>           
        )
    } 
  }
export default NavBar;