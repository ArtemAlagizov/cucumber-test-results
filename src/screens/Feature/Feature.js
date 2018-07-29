import React, {Component} from 'react';

import DataHandler from '../../utils/DataHandler';
import ExampleData from '../../exampleData.json';
import ScenarioList from './components/ScenarioList/ScenarioList';
import FeatureHeader from './components/FeatureHeader/FeatureHeader';

class Feature extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feature: {}
        };

        this.loadData = this.loadData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        const feature = this.props.location.feature || this.state.feature;

        return (
            <div className="feature">
                <FeatureHeader headerData={this.state.featureName}/>
                <ScenarioList feature={feature}/>
            </div>
        );
    }

    loadData() {
        const features = DataHandler.addRelevantInformation(ExampleData);
        const featureId = this.props.match.params.id;
        const feature = features.find(feature => feature.id === featureId);
        const featureName = feature.name;

        this.setState({
            featureName: featureName,
            feature: feature
        });
    }
}

export default Feature;