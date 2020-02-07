import React,{useState, useEffect} from "react";
import { Form, Button} from "react-bootstrap";
import {Redirect} from "react-router-dom"

import data from "../db/db.json"


const LogIn = props => {





  const {autoRegistration, users} = data

  const [autoRegistrationPage, setAutoRegistrationPage] = useState(false)

  // localStorage.setItem('myCat', 'Tom');

  window.localStorage.setItem("autoRegistration",JSON.stringify(autoRegistration) )

  window.localStorage.setItem("users",JSON.stringify(users) )




  const userData = {
    "email":"",
    "password":"",
    "id":""
  }




  const [credential, setCredential] = useState(userData)


  const handleChange = e => {
      const {value, name} = e.target;
      setCredential(prev => ({...prev, [name]: value}))
  }

  const onLogin = () => {

    let user = users[0]
    debugger
    if(credential.email === user.email && credential.password === user.password){
      setAutoRegistrationPage(true)
    }


  }




  return (

    <>

    {autoRegistrationPage?<Redirect to='/customerAndVehicleDetail' />:<div className="Login">
      <Form>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value = {credential.email} name="email" type="email" placeholder="Enter email"  onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  value = {credential.password} name="password" type="password" placeholder="Password" onChange={handleChange}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={onLogin}>Submit</Button>
      </Form>
    </div>
    }

    </>



  );
}

export default LogIn;