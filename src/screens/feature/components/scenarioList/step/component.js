import React, {Component} from 'react';

import './style.css';
import TimeUtils from '../../../../../utils/timeUtils';

class Step extends Component {
    render() {
        const step = this.props.step;
        const stepStatusClass = step.status ? step.status : 'failed';
        const stepStatusIndicatorClass = `${stepStatusClass} rectangle`;
        const divStyle = {'maxWidth': TimeUtils.getWidthBasedOnTimeRate(step.timeRate)};

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

export default Step;