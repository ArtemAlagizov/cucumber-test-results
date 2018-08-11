import React, {Component} from 'react';

import './Step.css';
import TimeUtils from '../../../../utils/TimeUtils';

class Scenario extends Component {
    render() {
        const step = this.props.step;
        const stepStatusClass = step.testsPassed ? 'passed' : 'failed';
        const stepStatusIndicatorClass = `${stepStatusClass} rectangle`;
        const divStyle = {
            'maxWidth': TimeUtils.getWidthBasedOnTimeRate(step.timeRate),
        };

        return (
            <div className="step">
                <div className="step-content">
                    <div className="step-status-and-name">
                        <div className={stepStatusIndicatorClass}/>
                        <div>{step.name}</div>
                    </div>
                    <div className={stepStatusClass} style={divStyle}/>
                </div>
            </div>
        )
    }
}

export default Scenario;