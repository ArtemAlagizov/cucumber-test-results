import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './style.css';
import TimeUtils from '../../../../../utils/timeUtils';

class FeatureTile extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        const feature = this.props.feature || {
            name: '',
            scenariosNumber: 0,
            duration: 0
        };
        const featureName = feature.name || '';
        const featureScenariosNumber = feature.scenariosNumber || 0;
        const featureDuration = feature.duration || 0;
        const featureStatusClass = feature ? feature.testsPassed ? 'passed' : 'failed' : '';

        return (
            <div className="feature-tile" onClick={this.handleOnClick}>
                <div className="feature-tile-content">
                    <div className="feature-tile-upper">
                        <div className="dashboard-name">{featureName}</div>
                    </div>
                    <div className="feature-tile-downer">
                        <div className="number-of-scenarios">
                            <div className="label">Number of scenarios:</div>
                            <div>{featureScenariosNumber}</div>
                        </div>
                        <div className="duration">
                            <div className="label">Duration:</div>
                            <div>
                                {TimeUtils.convertNanosecondsToTime(featureDuration)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={featureStatusClass}/>
            </div>
        )
    }

    handleOnClick() {
        this.props.history.push({
            pathname: `/feature/${this.props.feature.id}`,
            feature: this.props.feature,
            loadData: this.props.loadData
        });
    }
}

export default withRouter(FeatureTile);