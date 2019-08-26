import React from 'react';
import {Switch, Route} from "react-router-dom"
import Home from "../src/components/Home"
import IndividualAmp from "../src/components/IndividualAmp"

export default (    
    <Switch>
        <Route path="/amp/:id" component={IndividualAmp}/>
        <Route path="/" component={Home}/>

        


    </Switch>
)