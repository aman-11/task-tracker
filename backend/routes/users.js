const router=require('express').Router(); //express router
let User= require('../models/user.model');// mongo model we created

//first inpoint handling http  incmoning get requewst in /user path
router.route('/').get((req,res) =>{
    User.find()//momgo method to get all the user in db
    .then(users=> res.json(users))//result are ret in json format
    .catch(err => res.status(400).json('Error:'+err));// if not founf error
});

//second inpoint post request
router.route('/add').post((req,res)=>{
    const username= req.body.username;

    const newUser= new User({username});//instance of user

    newUser.save()//save to db
        .then(()=> res.json('User Added'))//return donr
        .catch(error=> res.status(400).json('Error:'+err));//return error
});
module.exports= router;