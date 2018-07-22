import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './HeaderFeatures.css';
import TimeUtils from '../TimeUtils/TimeUtils';
import cucumberLogo from '../../rickle.png';

class HeaderFeatures extends Component {
    render() {
        const headerData = this.props.headerData;
        const overallDuration = TimeUtils.convertNanosecondsToTime(headerData.overallDuration);
        const featuresNumber = headerData.featuresNumber;
        const numberOfPassedFeatures = headerData.numberOfPassedFeatures;
        const percentageOfPassed = numberOfPassedFeatures / featuresNumber * 100;
        const circularIndicatorText = `${numberOfPassedFeatures}/${featuresNumber}`;

        return (
            <div className="header-features">
                <div className="header-title">
                    <div className="header-title-container">
                        <div>Cucumber</div>
                        <div>LANA</div>
                    </div>
                    <div className="cucumber-logo-container">
                        <img src={cucumberLogo} className="cucumber-logo" alt={cucumberLogo}/>
                    </div>
                </div>
                <div className="header-statistics">
                    <div className="header-statistics-container">
                        <div className="test-status">
                            <CircularProgressbar percentage={percentageOfPassed} text={circularIndicatorText}/>
                        </div>
                        <div className="duration-container">
                            <div>Overall time</div>
                            <div className="duration-time">{overallDuration}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderFeatures;