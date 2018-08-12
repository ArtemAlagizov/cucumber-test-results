import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './style.css';
import TimeUtils from '../../../../../utils/TimeUtils';

class FeatureTile extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        const feature = this.props.feature;
        const featureStatusClass = feature.testsPassed ? 'passed' : 'failed';

        return (
            <div className="feature-tile" onClick={this.handleOnClick}>
                <div className="feature-tile-content">
                    <div className="feature-tile-upper">
                        <div className="dashboard-name">{feature.name}</div>
                    </div>
                    <div className="feature-tile-downer">
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

    handleOnClick() {
        this.props.history.push({
            pathname: `/feature/${this.props.feature.id}`,
            feature: this.props.feature,
            loadData: this.props.loadData
        });
    }
}

export default withRouter(FeatureTile);