import React, {Component} from 'react';
import './style.css';

import FeatureList from './components/featureList/component';
import FeaturesHeader from './components/header/component';
import DataHandler from '../../utils/dataHandler';
import FeaturesInfoPanel from './components/infoPanel/component';

class Features extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerData: {},
            filteredFeatures: [],
            originalFeatures: [],
            data: this.props.data
        };

        this.loadData = this.loadData.bind(this);
        this.filterData = this.filterData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="features">
                <FeaturesHeader headerData={this.state.headerData}/>
                <FeaturesInfoPanel filterData={this.filterData}/>
                <FeatureList features={this.state.filteredFeatures}/>
            </div>
        );
    }

    loadData() {
        const features = DataHandler.addRelevantInformation(this.state.data);
        const headerData = DataHandler.getHeaderData(features);

        this.setState({
            headerData: headerData,
            filteredFeatures: features,
            originalFeatures: features
        });
    }

    filterData(filterKey) {
        const filteredFeatures = DataHandler.filterData(this.state.originalFeatures, filterKey);
        const filteredHeaderData = DataHandler.getHeaderData(filteredFeatures);

        this.setState({
            headerData: filteredHeaderData,
            filteredFeatures: filteredFeatures,
            originalFeatures: this.state.originalFeatures
        });
    }
}

export default Features;
