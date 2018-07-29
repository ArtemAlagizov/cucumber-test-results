import React, {Component} from 'react';

import './FeatureList.css';
import Feature from '../FeatureTile/FeatureTile';

class FeatureList extends Component {
    render() {
        const features = this.props.features.map(feature =>
            <Feature key={feature.id} feature={feature}/>);

        return (
            <div className="feature-list">{features}</div>
        )
    }
}

export default FeatureList;