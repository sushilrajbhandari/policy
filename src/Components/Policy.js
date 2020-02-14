import React, {useState, useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios'

function Policy (props){

  const [policies, SetPolicies] = useState ([])

  useEffect (() =>{
    axios.get ('http://localhost:3000/autoRegistration')
    .then (response =>{
      console.log(response)
      SetPolicies (response.data)
    })
    .catch (error =>{
      console.log (error)
    })
    
  })

  function deletePolicty(){

  }

  function selectPolicy(){

  }

      return(
        <div>
          <h2>Policy</h2>
          <Table>
            <thead>
              <tr>
                <th>ZipCode</th>
                <th>Age of License</th>
                <th>Email</th>
                <th>Modal</th>
                <th>Manufacturer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {policies.map(policy => (
                <tr key={policy.id}>
                  <td>{policy.zipCode}</td>
                  <td>{policy.ageFirstReceivedLic}</td>
                  <td>{policy.email}</td>
                  <td>{policy.vehicleModel}</td>
                  <td>{policy.manufacturer}</td>
                  <td>
                    <Button 
                      variant="info" 
                      onClick={() => selectPolicy(policy.id)}>
                        Select
                    </Button>
                      &nbsp;
                    <Button 
                      variant="danger" 
                      onClick={() => deletePolicty(policy.id)}>
                        Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    }



export default Policy;
