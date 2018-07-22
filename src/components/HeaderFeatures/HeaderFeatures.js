import React, {Component} from 'react';
import './HeaderFeatures.css';
import TimeUtils from '../TimeUtils/TimeUtils';

class HeaderFeatures extends Component {
    render() {
        const headerData = this.props.headerData;
        const overallDuration = TimeUtils.convertNanosecondsToTime(headerData.overallDuration);
        const featuresNumber = headerData.featuresNumber;
        const numberOfPassedFeatures = headerData.numberOfPassedFeatures;

        return (
            <div className="header-features">
                <div>passed: {numberOfPassedFeatures}/{featuresNumber}</div>
                <div>duration: {overallDuration}</div>
            </div>
        )
    }
}

export default HeaderFeatures;