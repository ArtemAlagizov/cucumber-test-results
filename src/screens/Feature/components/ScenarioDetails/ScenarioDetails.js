import React, {Component} from 'react';

import './ScenarioDetails.css';
import TimeUtils from '../../../../utils/TimeUtils';

class Scenario extends Component {
    render() {
        const scenario = this.props.scenario;
        const scenarioStatusClass = scenario.testsPassed ? 'passed' : 'failed';
        const scenarioStatusIndicatorClass = `${scenarioStatusClass} rectangle`;
        const divStyle = {
            'maxWidth': TimeUtils.getWidthBasedOnTimeRate(scenario.timeRate),
        };

        return (
            <div className="scenario-details">
                <div className="scenario-status-and-name">
                    <div className={scenarioStatusIndicatorClass}/>
                    <div>{scenario.name}</div>
                </div>
                <div className={scenarioStatusClass} style={divStyle}/>
            </div>
        )
    }
}

export default Scenario;