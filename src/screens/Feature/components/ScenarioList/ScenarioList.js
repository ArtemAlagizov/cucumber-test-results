import React, {Component} from 'react';

import './ScenarioList.css';
import Scenario from '../Scenario/Scenario';

class ScenarioList extends Component {
    render() {
        const scenarios = this.props.feature.elements.map((scenario, index) =>
            <Scenario key={`scenario ${index}`} scenario={scenario}/>);

        return (
            <div className="scenario-list">{scenarios}</div>
        )
    }
}

export default ScenarioList;