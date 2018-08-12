import React, {Component} from 'react';

import './style.css';
import TimeUtils from '../../../../utils/TimeUtils';
import InfoPanelLegend from './Legend/component';
import InfoPanel from '../../../../ui/components/InfoPanel/component';

class FeatureInfoPanel extends Component {
    render() {
        const feature = this.props.feature;
        const maxScenarioTime = TimeUtils.convertNanosecondsToTime(feature.maxScenarioTime);
        const divStyle = {
            'minWidth': TimeUtils.getWidthBasedOnTimeRate(1),
        };
        const infoPanelLeftSideComponent = <InfoPanelLegend/>;
        const infoPanelRightSideComponent =
            <div className="info-details" style={divStyle}>This is {maxScenarioTime}</div>;

        return (
            <InfoPanel filterData={this.props.filterData}
                       leftSideComponent={infoPanelLeftSideComponent}
                       rightSideComponent={infoPanelRightSideComponent}/>
        )
    }
}

export default FeatureInfoPanel;