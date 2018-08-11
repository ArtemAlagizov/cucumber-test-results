import React, {Component} from 'react';

import './Step.css';
import TimeUtils from '../../../../utils/TimeUtils';

class Scenario extends Component {
    render() {
        const step = this.props.step;
        const stepStatusClass = step.testsPassed ? 'passed' : 'failed';

        return (
            <div className="step">
                <div className="step-content">
                    <div>{step.name}</div>
                    <div className={stepStatusClass}>Duration: {TimeUtils.convertNanosecondsToTime(step.duration)}</div>
                </div>
            </div>
        )
    }
}

export default Scenario;