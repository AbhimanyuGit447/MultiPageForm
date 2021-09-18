import { isEmpty, isEqual } from 'lodash';
import React from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { IFormState } from './MultiForm'
import axios from "axios";
import { useHistory } from "react-router-dom";



interface IProps {
    formState : IFormState;
    previousStep : () => void;

}

const ReviewForm = (props : IProps) => {

    const history = useHistory();

    const {formState, previousStep} = props;

    const onConfirm = () => {
        console.log("onConfirm" , onConfirm);

        const newForm ={
            step: formState.step,
            name: formState.name,
            fatherName: formState.fatherName,
            motherName: formState.motherName,
            email: formState.email,
            phoneNumber: formState.phoneNumber,
            address: formState.address,
            permanentAddress: formState.permanentAddress
        }

        axios.post("http://localhost:3001/create", newForm)

        alert("details are submitted, now REFRESH THE PAGE");
        
        
    }

    return (
        <div>
            <ListGroup variant = "flush">
                <ListGroup.Item> Name : {formState.name}</ListGroup.Item>
                <ListGroup.Item>Father Name : {formState.fatherName}</ListGroup.Item>
                <ListGroup.Item>Mother Name : {formState.motherName}</ListGroup.Item>
                <ListGroup.Item>Phone Number : {formState.phoneNumber}</ListGroup.Item>
                <ListGroup.Item>Email : {formState.email}</ListGroup.Item>
                <ListGroup.Item>Communication Address : {formState.address}</ListGroup.Item>
                <ListGroup.Item>Permanent Address : {formState.permanentAddress}</ListGroup.Item>
            </ListGroup>
            <br></br>
                <Form.Group>
                        <Button onClick = {onConfirm} type="submit">Confirm</Button> 
                </Form.Group>
                <br></br>
                <Form.Group>
                        <Button variant="secondary" onClick = {previousStep} type="submit">Previous</Button> 
                </Form.Group>
        </div>
    )
}

export default ReviewForm
