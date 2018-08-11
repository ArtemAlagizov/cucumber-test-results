import React, {Component} from 'react';

import './ScenarioList.css';
import Scenario from '../Scenario/Scenario';

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