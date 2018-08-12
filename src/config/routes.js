import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from '../App';
import Feature from '../screens/feature/component';

class Routes extends Component {
    static getRoutes() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/feature/:id" component={Feature}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;