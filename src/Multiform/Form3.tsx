import { isEmpty, isEqual } from 'lodash';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { IFormState } from './MultiForm'

interface IProps {
    nextStep : () => void;
    formState : IFormState;
    handleChange : (value : string, fieldName : string) => void;
    previousStep : () => void;

}

const Form3 = (props : IProps) => {

    const {nextStep, formState, handleChange, previousStep} = props;

    const onChangeCheckbox = (event : any) => {
        if(isEmpty(formState.permanentAddress) && event.target.checked){
            props.handleChange(formState.address, 'permanentAddress');
        }else if(isEqual(formState.permanentAddress,formState.address) && !event.target.checked){
                props.handleChange('', 'permanentAddress')
        }
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Communication Address</Form.Label>
                    <Form.Control
                        value={formState.address}
                        onChange  = {(event) => handleChange(event.target.value, 'address')}
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>
                <Form.Group className="my-5" controlId="formBasicCheckbox">
                    <Form.Check
                        onChange = {onChangeCheckbox}
                        type="checkbox"
                        label="Same as Communication Address"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Permanent Address</Form.Label>
                    <Form.Control
                        value={formState.permanentAddress}
                        onChange  = {(event) => handleChange(event.target.value, 'permanentAddress')}
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

export default Form3
