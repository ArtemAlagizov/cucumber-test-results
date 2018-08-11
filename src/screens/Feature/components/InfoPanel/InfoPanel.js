import React, {Component} from 'react';

import './InfoPanel.css';
import TimeUtils from '../../../../utils/TimeUtils';
import InfoPanelLink from '../InfoPanelLink/InfoPanelLink';

class InfoPanel extends Component {
    render() {
        const feature = this.props.feature;
        const maxScenarioTime = TimeUtils.convertNanosecondsToTime(feature.maxScenarioTime);
        const divStyle = {
            'minWidth': TimeUtils.getWidthBasedOnTimeRate(1),
        };

        return (
            <div className="info-panel">
                <InfoPanelLink/>
                <div className="info-details" style={divStyle}>This is {maxScenarioTime}</div>
            </div>
        )
    }
}

export default InfoPanel;