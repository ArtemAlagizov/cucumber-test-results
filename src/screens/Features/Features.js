import React, {Component} from 'react';
import './Features.css';

import ExampleData from '../../exampleData.json';
import FeatureList from '../../screens/Features/components/FeatureList/FeatureList';
import FeaturesHeader from '../../screens/Features/components/FeaturesHeader/FeaturesHeader';
import DataHandler from '../../utils/DataHandler';

class Features extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerData: {},
            features: []
        };

        this.loadData = this.loadData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="features">
                <FeaturesHeader headerData={this.state.headerData}/>
                <FeatureList features={this.state.features}/>
            </div>
        );
    }

    loadData() {
        const features = DataHandler.addRelevantInformation(ExampleData);
        const headerData = DataHandler.getHeaderData(features);

        this.setState({
            headerData: headerData,
            features: features
        });
    }
}

export default Features;
