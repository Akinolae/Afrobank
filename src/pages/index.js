import React, { Component } from 'react';
import HomePage from "../components/homepage"
import {BrowserRouter, Route, Switch} from "react-router-dom"

class Main extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main;