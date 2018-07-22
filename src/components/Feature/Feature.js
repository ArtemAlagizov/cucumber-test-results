import React, {Component} from 'react';
import './Feature.css';
import TimeUtils from '../TimeUtils/TimeUtils';

class Feature extends Component {
    render() {
        const feature = this.props.feature;
        const featureStatusClass = feature.testsPassed ? 'passed' : 'failed';

        return (
            <div className="feature">
                <div className="feature-content">
                    <div className="feature-upper">
                        <div className="dashboard-name">{feature.name}</div>
                    </div>
                    <div className="feature-downer">
                        <div className="number-of-scenarios">
                            <div className="label">Number of scenarios:</div>
                            <div>{feature.scenariosNumber}</div>
                        </div>
                        <div className="duration">
                            <div className="label">Duration:</div>
                            <div>
                                {TimeUtils.convertNanosecondsToTime(feature.duration)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={featureStatusClass}/>
            </div>
        )
    }
}

export default Feature;