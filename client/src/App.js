import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";  //instll react-router-dom
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//import all the components
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (  
       //jsx is return  
    //everything has to be used to will be in ret 
    //create a router element
    //if u got to only '/' then it goews to tht is it will shoe the list of the excercises which is a component(map to diff componenet)
    //create these component
    <Router>
 
      <Navbar/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
