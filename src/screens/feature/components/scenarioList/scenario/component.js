import React, {Component} from 'react';

import './style.css';
import Step from '../step/component';
import ScenarioDetails from '../scenarioDetails/component';
import Collapsible from 'react-collapsible';

class Scenario extends Component {
    render() {
        const scenario = this.props.scenario;
        const steps = scenario.steps.map((step, index) => <Step key={index} step={step}/>);
        const scenarioDetails = <ScenarioDetails scenario={scenario}/>;

        return (
            <Collapsible className="scenario" openedClassName="scenario" trigger={scenarioDetails}>
                <div className="step-list">{steps}</div>
            </Collapsible>
        )
    }
}

export default Scenario;