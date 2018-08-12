import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Feature from '../screens/feature/component';
import Validator from '../validation/validator';
import ExampleData from '../validation/exampleData.json';
import ValidationErrors from '../screens/validationErrors/component';
import Features from '../screens/features/component';

class Routes extends Component {
    static getRoutes() {
        const validationFunction = Validator.getValidationFunction();
        const isIncomingDataValid = validationFunction(ExampleData);
        const errorRoute = <ValidationErrors errors={validationFunction.errors}/>;
        const featuresRoute = isIncomingDataValid ?
            <Route exact path="/" render={props => (<Features data={ExampleData} {...props}/>)}/> :
            errorRoute;
        const featureRoute = isIncomingDataValid ?
            <Route exact path="/feature/:id" render={props => (<Feature data={ExampleData} {...props}/>)}/> :
            errorRoute;

        return (
            <Router>
                <div>
                    <Switch>
                        {featuresRoute}
                        {featureRoute}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;