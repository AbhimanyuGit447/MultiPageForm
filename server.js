const express = require ("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv')

app.use(cors());
app.use(express.json());

dotenv.config()
//connect to mongoose

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("database connected success")
})



// rquire the data
app.use("/", require("./routes/formRoutes"));


app.listen(3001, function(){
    console.log("express server is rinning on PORT 3001");
});

