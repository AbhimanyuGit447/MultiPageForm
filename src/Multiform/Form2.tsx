import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { IFormState } from './MultiForm'

interface IProps {
    nextStep : () => void;
    formState : IFormState;
    handleChange : (value : string, fieldName : string) => void;
    previousStep : () => void; 

}

const Form2 = (props : IProps) => {

    const {nextStep, formState, handleChange, previousStep} = props;

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={formState.email}
                        onChange  = {(event) => handleChange(event.target.value, 'email')}
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        value={formState.phoneNumber}
                        onChange  = {(event) => handleChange(event.target.value, 'phoneNumber')}
                        type="text"
                     />
                </Form.Group>
                <Form.Group>
                        <Button onClick = {nextStep} type="submit">Continue</Button> 
                </Form.Group>
                <br></br>
                <Form.Group>
                        <Button variant="secondary" onClick = {previousStep} type="submit">Previous</Button> 
                </Form.Group>
            </Form>
        </div>
    )
}

export default Form2
