import React from 'react';
import  {Container} from 'react-bootstrap';
import './App.css';
import NavBar from './Components/NavBar';
import Router from "./AppRoute";

// import CustomerAndVehicleDetail from './Components/CustomerAndVehicleDetail/CustomerAndVehicleDetail';

function App() {
  // const showNavigationItem = (e) => {

  // };

  return (
    <div >
      <Container>
        <NavBar />
        <Router />
      </Container>

    </div>
  );
}

export default App;
