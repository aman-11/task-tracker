const router = require('express').Router(); //express router
let Excercise = require('../models/excercise.model');// mongo model we created

//first inpoint handling http  incmoning get requewst in /user path
router.route('/').get((re,res) =>{
    Excercise.find()//momgo method to get all the user in db
    .then(excercises=> res.json(excercises))//result are ret in json format
    .catch(err => res.status(400).json('Error:'+err));// if not founf error
});

//second inpoint post request
router.route('/add').post( (req,res)=>{
    const username= req.body.username;
    const description= req.body.description;
    const duration=Number( req.body.duration);
    const date=Date.parse( req.body.date);

    const newExcercise= new Excercise({
        username,
        description,
        duration,
        date,
    });//instance of user

    newExcercise.save()//save to db
        .then(()=> res.json('Excercise Added'))//return donr
        .catch(err => res.status(400).json('Error:'+err));//return error
});


//paassing th id in next url
router.route('/:id').get((req,res)=>{   //passisng the corresponding id for the particular user
    Excercise.findById(req.params.id)   //Excercise.findbyid  will find the tuple of rrespective  id
    .then(excercise=>res.json(excercise))   //return the tuples
    .catch(err => res.status(400).json('Error:'+err));// if not founf error
});


// deleting the required excerice by the id
router.route('/:id').delete((req,res)=>{   //passisng the corresponding id for the particular user
    Excercise.findByIdAndDelete(req.params.id)   //Excercise.findbyid  will find the tuple of rrespective  id
    .then(()=>res.json('excercise deleted!'))   //delete the excercise
    .catch(err => res.status(400).json('Error:'+err));// if not founf error
});


//update the excercise
router.route('/update/:id').post( (req,res) =>{  //update by id
    Excercise.findById(req.params.id)                //find id

    .then(excercise=>{                              //route recv json obj in req so init in the corresponding details like date duratn etc
        excercise.username=req.body.username;              
        excercise.description=req.body.description;
        excercise.duration=Number(req.body.duration);
        excercise.date=Date.parse(req.body.date);

        excercise.save()            //save
        .then(()=>res.json('Excercise Updated!'))   //print updates
        .catch(err=> res.status(400).json('error'+err));  //else error
    })
    .catch(err=> res.status(400).json('error'+err));
});
module.exports= router;