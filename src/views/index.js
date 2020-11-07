import React from "react";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import Dashboard from "../components/dashboard/index";
import Login from "../components/login";
import SignUp from "../components/signUp";
import Homepage from "../components/landingpage"


const MainApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Homepage} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainApp;