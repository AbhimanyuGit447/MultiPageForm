import React, { useState } from 'react'
import Form1 from './Form1'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form2 from './Form2';
import Form3 from './Form3';
import ReviewForm from './ReviewForm';


export interface IFormState {
    step : number;
    name : string;
    fatherName : string;
    motherName : string;
    email : string;
    phoneNumber : number | undefined;
    address : string;
    permanentAddress : string;
}

const defaultValue : IFormState = {
    step : 1,
    name : "",
    fatherName : "",
    motherName : "",
    email : "",
    phoneNumber : undefined,
    address : "",
    permanentAddress : "",
}

export const MultiForm = () => {

    const [formState, setFormState] = useState<IFormState>(defaultValue)

    const handleFieldUpdate = (value : string, fieldName : string) => {
        setFormState({
            ...formState,
            [fieldName] : value
        });
    }

    const handleNextStep = () => {
        setFormState({
            ...formState,
            step : formState.step + 1
        });
    }

    const handlePreviousStep = () => {
        setFormState({
            ...formState,
            step : formState.step - 1
        });
    }

    const renderForms = () => {

        if(formState.step === 1){
           return <Form1 formState = {formState} handleChange = {handleFieldUpdate}  nextStep ={handleNextStep}/>
        }
        else if(formState.step === 2){
            return <Form2 previousStep = {handlePreviousStep} formState = {formState} handleChange = {handleFieldUpdate}  nextStep ={handleNextStep}/>
         }
         else if(formState.step === 3){
            return <Form3 previousStep = {handlePreviousStep} formState = {formState} handleChange = {handleFieldUpdate}  nextStep ={handleNextStep}/>
         }
         else if(formState.step === 4){
            return <ReviewForm previousStep = {handlePreviousStep} formState = {formState} />
         }
        return <></>
    }

    return (
        <div>
            {renderForms()}
        </div>
    )
}

export default MultiForm
