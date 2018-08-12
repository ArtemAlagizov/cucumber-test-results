import React, {Component} from 'react';

import './style.css';
import Feature from './featureTile/component';

class FeatureList extends Component {
    render() {
        const features = this.props.features.map(feature =>
            <Feature key={feature.id} feature={feature}/>);

        return (
            <div className="feature-list-container">
                <div className="feature-list">{features}</div>
                <div/>
            </div>
        )
    }
}

export default FeatureList;