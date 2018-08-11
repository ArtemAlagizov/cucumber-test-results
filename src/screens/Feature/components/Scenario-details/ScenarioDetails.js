import React, {Component} from 'react';

import './ScenarioDetails.css';
import TimeUtils from '../../../../utils/TimeUtils';

class Scenario extends Component {
    render() {
        const scenario = this.props.scenario;
        const scenarioStatusClass = scenario.testsPassed ? 'passed' : 'failed';

        return (
            <div className="scenario-details">
                <div>{scenario.name}</div>
                <div className={scenarioStatusClass}>Duration: {TimeUtils.convertNanosecondsToTime(scenario.duration)}</div>
            </div>
        )
    }
}

export default Scenario;