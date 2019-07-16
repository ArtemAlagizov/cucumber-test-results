import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {isEmpty} from 'ramda';
import moment from 'moment';

import Feature from '../screens/feature/component';
import Validator from '../validation/validator';
import ValidationErrors from '../screens/validationErrors/component';
import Features from '../screens/features/component';
import Schema from '../validation/schema';
import axios from 'axios';

let exampleData = [];
let lastModified = null;
let lastChecked = null;
let bambooAvailable = true;
let csharpCoveragePercentage = 'Not available';
let rCoveragePercentage = 'Not available';
let duplicatesNumber = 'Not available';
let issuesNumber = 'Not available';

class Routes extends Component {
    downloadLatestFile() {
        const artifactUrl = 'http://ci1-apps-wfa-prd.asml.com:8085/browse/LANA-LANA1DASHDEPL/latest/artifact/JOB1/CucumberLana-JSON-results/cucumber.json';
        // const artifactUrl = 'http://localhost:8080/exampleData.json';
        const csharpCoveragePercent = 'http://ci1-apps-wfa-prd.asml.com:8085/browse/LANA-LANA1CS109/latestSuccessful/artifact/shared/CoveragePercent/csharpCoveragePercent.json';
        const rCoveragePercent = 'http://ci1-apps-wfa-prd.asml.com:8085/browse/LANA-LANA1R/latestSuccessful/artifact/JF7/rCoveragePercent/rCoveragePercent.json';
        const staticCodeAnalysisResults = 'http://ci1-apps-wfa-prd.asml.com:8085/browse/LANA-LANA1CS109/latestSuccessful/artifact/shared/StaticCodeAnalysisResults/staticCodeAnalysisResults.json';

        lastChecked = moment();

        return axios.head(`${artifactUrl}`, {
            withCredentials: true
        })
            .then(response => {
                const fileModifiedDate = moment(response.headers['last-modified']);

                if (fileModifiedDate.isSame(lastModified) && !isEmpty(exampleData)) {
                    return Promise.resolve({
                        data: exampleData
                    });
                }

                lastModified = fileModifiedDate;

                return axios.get(`${artifactUrl}`, {
                    withCredentials: true
                });
            })
            .then(response => {
                // handle success
                exampleData = response.data;
                bambooAvailable = true;

                return Promise.resolve();
            })
            .catch(() => {
                // handle failure
                bambooAvailable = false;

                return Promise.resolve();
            })
            .then(() => axios.get(`${csharpCoveragePercent}`, {withCredentials: true}))
            .then(response => {
                // handle success
                csharpCoveragePercentage = `${response.data.coveragePercent}%`;

                return Promise.resolve();
            })
            .catch(() => {
                // handle failure
                csharpCoveragePercentage = 'Not available';

                return Promise.resolve();
            })
            .then(() => axios.get(`${rCoveragePercent}`, {withCredentials: true}))
            .then(response => {
                // handle success
                const rCoverageRounded = Math.round((+response.data.coveragePercent) * 10)/ 10;

                rCoveragePercentage = `${rCoverageRounded}%`;
            })
            .catch(() => {
                // handle failure
                rCoveragePercentage = 'Not available';
            })
            .then(() => axios.get(`${staticCodeAnalysisResults}`, {withCredentials: true}))
            .then(response => {
                // handle success
                duplicatesNumber = +response.data.duplicatesNumber;
                issuesNumber = +response.data.issuesNumber;
            })
            .catch(() => {
                // handle failure
                duplicatesNumber = 'Not available';
                issuesNumber = 'Not available';
            })
            .catch(error => console.log(error));
    }

    getRoutes() {
        return this.downloadLatestFile().then(() => {
            const baseUrl = process.env.PUBLIC_URL;
            const validationFunction = Validator.getValidationFunction(Schema);
            const isIncomingDataValid = validationFunction(exampleData);
            const errorRoute = <ValidationErrors errors={validationFunction.errors}/>;
            const relevantData = {
                data: exampleData,
                lastModified: lastModified,
                lastChecked: lastChecked,
                bambooAvailable: bambooAvailable,
                csharpCoveragePercentage: csharpCoveragePercentage,
                rCoveragePercentage: rCoveragePercentage,
                staticCodeAnalysisResults: {
                    duplicatesNumber: duplicatesNumber,
                    issuesNumber: issuesNumber
                }
            };
            const featuresRoute = isIncomingDataValid ?
                <Route exact
                       path={`${baseUrl}/`}
                       render={props => (<Features data={relevantData} {...props}/>)}/> :
                errorRoute;
            const featureRoute = isIncomingDataValid ?
                <Route exact
                       path={`${baseUrl}/feature/:id`}
                       render={props => (<Feature data={relevantData} {...props}/>)}/> :
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
        });
    }
}

export default Routes;