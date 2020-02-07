import React from 'react';
import { Table, Button } from 'react-bootstrap';

class Policy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      policies: []
    }
  }

  componentDidMount(){

    let autoRegistrationData = JSON.parse(localStorage.getItem("autoRegistration"))
    let userData = JSON.parse(localStorage.getItem("users"))

    const {id, email} = userData[0]

    let policies = []
    for (let i=0; i<autoRegistrationData.length; i++){
      const {zipCode,ageFirstReceivedLic,vehicleModel,manufacturer} = autoRegistrationData[i]
      // debugger
      const policy = {zipCode,ageFirstReceivedLic, vehicleModel,manufacturer,id,email}
      policies.push(policy)
    }

    this.setState({policies:policies})


  }

  render() {
    const {policies} = this.state;
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
                    <Button variant="info" onClick={() => this.props.selectPolicy(policy.id)}>Select</Button>
                    &nbsp;<Button variant="danger" onClick={() => this.deletePolicty(policy.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
  }
}

export default Policy;
