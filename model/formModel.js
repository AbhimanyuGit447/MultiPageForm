const mongoose = require ("mongoose");

const formSchema = {
    step : Number,
    name : String,
    fatherName : String,
    motherName : String,
    email : String,
    phoneNumber : Number | undefined,
    address : String,
    permanentAddress : String
}

const Form = mongoose.model("Form", formSchema);

module.exports = Form;