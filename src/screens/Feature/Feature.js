import React, {Component} from 'react';

import DataHandler from '../../utils/DataHandler';
import ExampleData from '../../exampleData.json';
import ScenarioList from './components/ScenarioList/ScenarioList';
import FeatureHeader from './components/FeatureHeader/FeatureHeader';
import InfoPanel from './components/InfoPanel/InfoPanel';

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
                <FeatureHeader feature={feature}/>
                <InfoPanel feature={feature}/>
                <ScenarioList feature={feature}/>
            </div>
        );
    }

    loadData() {
        const features = DataHandler.addRelevantInformation(ExampleData);
        const featureId = this.props.match.params.id;
        const feature = features.find(feature => feature.id === featureId);

        this.setState({
            feature: feature
        });
    }
}

export default Feature;