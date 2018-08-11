import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './FeatureHeader.css';
import TimeUtils from '../../../../utils/TimeUtils';

class FeatureHeader extends Component {
    render() {
        const feature = this.props.feature;
        const featureName = feature.name;
        const testsPassed = feature.testsPassed;
        const overallDuration = TimeUtils.convertNanosecondsToTime(feature.duration);
        const iconName = testsPassed ? 'check-circle' : 'exclamation-circle';
        const iconClass = `${testsPassed ? 'tests-passed' : 'tests-failed'} icon`;
        const iconToShow = <FontAwesome className={iconClass} name={iconName} size='3x'/>;

        return (
            <div className="feature-header">
                <div className="feature-name-status-container">
                    {iconToShow}
                    <div className="feature-name">
                        {featureName}
                    </div>
                </div>
                <div className="duration-container">
                    <div>Overall time</div>
                    <div className="duration-time">{overallDuration}</div>
                </div>
            </div>
        )
    }
}

export default withRouter(FeatureHeader);