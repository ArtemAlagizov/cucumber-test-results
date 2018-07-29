import React, {Component} from 'react';

import './Scenario.css';
import TimeUtils from '../../../../utils/TimeUtils';

class Scenario extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        const scenario = this.props.scenario;
        const scenarioStatusClass = scenario.testsPassed ? 'passed' : 'failed';

        return (
            <div className="scenario" onClick={this.handleOnClick}>
                <div className="scenario-content">
                    <div>{scenario.name}</div>
                    <div className={scenarioStatusClass}>Duration: {TimeUtils.convertNanosecondsToTime(scenario.duration)}</div>
                </div>
            </div>
        )
    }

    handleOnClick() {
        // todo: expand scenario steps
    }
}

export default Scenario;