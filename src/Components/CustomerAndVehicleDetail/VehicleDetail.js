import React,{useState, useEffect} from "react";
import  {Form, Col} from 'react-bootstrap';

const VehicleDetail = (props) => {

    const data = {
        vehicleModel:"Accord",
        manufacturer:"Honda",
        year:"2019",
        policyEffectiveDate:""

    }




    const [vehicleData, setVehicleData] = useState(data)


    const handleChange = e => {
        debugger
        const {value, name} = e.target;
        setVehicleData(prev => ({...prev, [name]: value}))
    }

    useEffect(() => {
        props.onChange(vehicleData)
    });


    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}  md="6" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Model</Form.Label>
                    <Form.Control name="vehicleModel" as="select" onChange={handleChange}>
                        <option value="Accord">Accord</option>
                        <option value="Camry">Camry</option>
                        <option value="Altima">Altima</option>
                        <option value="Highlander">Highlander</option>
                        <option value="Rav4">Rav4</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}  md="6" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Manufacturer</Form.Label>
                    <Form.Control name="manufacturer"  as="select" onChange={handleChange}>
                        <option value="Honda">Honda</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Mazda">Mazda</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}  md="6" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Year</Form.Label>
                    <Form.Control name="year" as="select" onChange={handleChange}>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Policy Effective Date</Form.Label>
                    <Form.Control
                        name="policyEffectiveDate"
                        type="date"
                        value="1991-01-29"
                        placeholder="Policy Effective Date"
                        onChange={handleChange}
                        required />
                </Form.Group>
            </Form.Row>
        </Form>
    )
};

export default VehicleDetail