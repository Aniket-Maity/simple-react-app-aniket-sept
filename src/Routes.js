import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import CalculatorPage from "./CalculatorPage";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/CarbonCalculator" exact component={CalculatorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes