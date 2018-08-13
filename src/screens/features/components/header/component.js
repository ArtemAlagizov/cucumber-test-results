import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './style.css';
import TimeUtils from '../../../../utils/timeUtils';
import cucumberLogo from '../../../../rickle.png';

class FeaturesHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerData: {
                overallDuration: 0,
                featuresNumber: 0,
                numberOfPassedFeatures: 0
            }
        };
    }

    componentWillMount() {
        this.setState({
            headerData: this.props.headerData || this.state.headerData
        })
    }

    render() {
        const headerData = this.state.headerData;
        const overallDuration = TimeUtils.convertNanosecondsToTime(headerData.overallDuration);
        const featuresNumber = headerData.featuresNumber;
        const numberOfPassedFeatures = headerData.numberOfPassedFeatures;
        const percentageOfPassed = featuresNumber !== 0 ? numberOfPassedFeatures / featuresNumber * 100 : 0;
        const circularIndicatorText = `${numberOfPassedFeatures}/${featuresNumber}`;

        return (
            <div className="features-header">
                <div className="features-header-title">
                    <div className="features-header-title-container">
                        <div>Cucumber</div>
                        <div>LANA</div>
                    </div>
                    <div>
                        <img src={cucumberLogo} className="cucumber-logo" alt={cucumberLogo}/>
                    </div>
                </div>
                <div className="features-header-statistics">
                    <div className="features-header-statistics-container">
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

export default FeaturesHeader;