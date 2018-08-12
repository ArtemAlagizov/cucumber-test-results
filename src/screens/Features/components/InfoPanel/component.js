import React, {Component} from 'react';

import './style.css';
import FeaturesInfoPanelLegend from './Legend/component';
import FilterPanel from './FilterPanel/component';
import InfoPanel from '../../../../ui/components/InfoPanel/component';

class FeaturesInfoPanel extends Component {
    render() {
        const infoPanelLeftSideComponent = <FeaturesInfoPanelLegend/>;
        const infoPanelRightSideComponent = <FilterPanel filterData={this.props.filterData}/>;

        return (
            <InfoPanel filterData={this.props.filterData}
                       leftSideComponent={infoPanelLeftSideComponent}
                       rightSideComponent={infoPanelRightSideComponent}/>
        )
    }
}

export default FeaturesInfoPanel;