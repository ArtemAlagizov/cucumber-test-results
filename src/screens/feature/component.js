import React, {Component} from 'react';

import DataHandler from '../../utils/dataHandler';
import ScenarioList from './components/scenarioList/element';
import FeatureHeader from './components/header/component';
import FeatureInfoPanel from "./components/infoPanel/component";
import ExampleData from '../../validation/exampleData.json';
import Validator from '../../validation/validator';
import ValidationErrors from '../validationErrors/component';

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
        const validationFunction = Validator.getValidationFunction();
        const isIncomingDataValid = validationFunction(ExampleData);
        const resultingTemplate = isIncomingDataValid ?
            <div className="feature">
                <FeatureHeader feature={feature}/>
                <FeatureInfoPanel feature={feature}/>
                <ScenarioList feature={feature}/>
            </div> :
            <ValidationErrors errors={validationFunction.errors}/>;

        return (
            resultingTemplate
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