 //npx install express cors mongoose dotenv

 const express = require('express');
 const cors = require('cors');
 const mongoose = require('mongoose')
    //require('dotenv').config();//env enciornment
const {url} = require('./keys');
const app = express();
const port =5000;//port of server
app.use(cors());
app.use(express.json());//parsse json server going to recv and send json

//mongodb
//const uri=process.env.ATLAS_URI;
mongoose.connect(url,{
        useNewUrlParser: true ,
        //useCreateIndex:true,
        useUnifiedTopology: true,
        useFindAndModify:true
    }).then(()=>{
        console.log("connection!!");
    }).catch((err)=>{
        console.log("error in connection with database "+err.message)

    });
const excercisesRouter= require('./routes/excercises');
const userRouter= require('./routes/users');//require the files

app.use('/excercises',excercisesRouter);//app.use will use the file
app.use('/users',userRouter);// goes to /users will load user

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
}); 
