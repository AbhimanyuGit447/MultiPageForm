const express = require ("express");

const router = express.Router();

const Form = require ("../model/formModel");

router.route("/create").post((req, res) => {

    const step = req.body.step;
    const name = req.body.name;
    const fatherName =  req.body.fatherName;
    const motherName = req.body.motherName;
    const email = req.body.email;
    const phoneNumber =req.body.phoneNumber;
    const address = req.body.address;
    const permanentAddress = req.body.permanentAddress;

    const newForm = new Form ({
        step,
        name,
        fatherName,
        motherName,
        email,
        phoneNumber,
        address,
        permanentAddress
    });

    newForm.save();
})

module.exports = router;
