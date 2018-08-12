import React, {Component} from 'react';

import './style.css';
import Scenario from './scenario/component';

class ScenarioList extends Component {
    render() {
        const scenarios = this.props.feature.elements;
        const scenarioList = scenarios.map((scenario, index) =>
            <Scenario key={`scenario ${index}`} scenario={scenario}/>);

        return (
            <div className="scenario-list">{scenarioList}</div>
        )
    }
}

export default ScenarioList;