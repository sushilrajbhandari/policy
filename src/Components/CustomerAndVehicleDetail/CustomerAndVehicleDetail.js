import React, {useState} from "react";
import  {Form, Button} from 'react-bootstrap';
import {Redirect} from "react-router-dom"
import CustomerDetail from './CustomerDetail';
import VehicleDetail from './VehicleDetail';


const CustomerAndVehicleDetail = (props) => {

    const [validated, setValidated] = useState(false);
    const [customerData, setCustomerData] = useState({});
    const [vehicleData, setVehicleData] = useState({});

    const handleSubmit = event => {

           event.preventDefault();
          event.stopPropagation();

        let oldData = localStorage.getItem("autoRegistration")

        let userData = JSON.parse(localStorage.getItem("users"))

        const parseData = JSON.parse(oldData)
// debugger
        let customerVehicleDetail = {...customerData, ...vehicleData, userId: userData[0].id, id: parseData.length}

        parseData.push(customerVehicleDetail)
        window.localStorage.setItem("autoRegistration",JSON.stringify(parseData))


        setpolicyPage(true)

      };


      const [policyPage, setpolicyPage] = useState(false)

    return (
        <React.Fragment>
            {
                policyPage?<Redirect to='/policy' />:<>
                <h2>Auto Quote Registration</h2>
            <CustomerDetail onChange={setCustomerData}/>
            <VehicleDetail onChange={setVehicleData} />
            <Form className="mB60" noValidate validated={validated} onSubmit={handleSubmit}>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
                </>
            }

        </React.Fragment>
    )
};

export default CustomerAndVehicleDetail