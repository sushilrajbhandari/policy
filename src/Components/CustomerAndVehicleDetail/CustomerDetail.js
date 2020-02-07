import React,{useState, useEffect} from "react";
import  {Form, Col} from 'react-bootstrap';

const CustomerDetail = (props) => {


    const data = {
        zipCode:"",
        dlId:"",
        ageFirstReceivedLic:""
    }

    // const {onChange} = props

    const [customerData, setCustomerData] = useState(data)

    const handleChange = e => {
        const {value, name} = e.target;
        setCustomerData(prev => ({...prev, [name]: value}))
    }

    useEffect(() => {
        props.onChange(customerData)
    });



    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control
                        name="zipCode"
                        type="text"
                        placeholder="Zipcode"
                        value={customerData.zipCode}
                        required
                        onChange={(e) => handleChange(e)}
                        />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>DL ID</Form.Label>
                    <Form.Control
                        name="dlId"
                        type="text"
                        placeholder="DL ID"
                        value={customerData.dlId}
                        onChange={(e) => handleChange(e)}
                        required />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Age when you got first License</Form.Label>
                    <Form.Control
                        name="ageFirstReceivedLic"
                        type="text"
                        placeholder="Age"
                        value={customerData.age}
                        onChange={(e) => handleChange(e)}
                        required />
                </Form.Group>
            </Form.Row>
        </Form>
    )
};

export default CustomerDetail