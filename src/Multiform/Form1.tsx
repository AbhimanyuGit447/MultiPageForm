import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { IFormState } from './MultiForm'

interface IProps {
    nextStep : () => void;
    formState : IFormState;
    handleChange : (value : string, fieldName : string) => void;

}

const Form1 = (props : IProps) => {

    const {nextStep, formState, handleChange} = props;

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={formState.name}
                        onChange  = {(event) => handleChange(event.target.value, 'name')}
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Father Name</Form.Label>
                    <Form.Control
                        value={formState.fatherName}
                        onChange  = {(event) => handleChange(event.target.value, 'fatherName')}
                        type="text"
                     />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Mother Name</Form.Label>
                    <Form.Control
                        value={formState.motherName}
                        onChange  = {(event) => handleChange(event.target.value, 'motherName')}
                        type="text"
                    />
                </Form.Group>
                <Form.Group>
                        <Button onClick = {nextStep} type="submit">Continue</Button> 
                </Form.Group>
            </Form>
        </div>
    )
}

export default Form1
