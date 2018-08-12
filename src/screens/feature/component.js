import React, {Component} from 'react';

import DataHandler from '../../utils/dataHandler';
import ScenarioList from './components/scenarioList/element';
import FeatureHeader from './components/header/component';
import FeatureInfoPanel from './components/infoPanel/component';

class Feature extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feature: {},
            data: this.props.data
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
                <FeatureInfoPanel feature={feature}/>
                <ScenarioList feature={feature}/>
            </div>
        );
    }

    loadData() {
        const features = DataHandler.addRelevantInformation(this.state.data);
        const featureId = this.props.match.params.id;
        const feature = features.find(feature => feature.id === featureId);

        this.setState({
            feature: feature
        });
    }
}

export default Feature;