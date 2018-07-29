import React, {Component} from 'react';
import './Features.css';

import ExampleData from '../../exampleData.json';
import FeatureList from '../../screens/Features/components/FeatureList/FeatureList';
import FeaturesHeader from '../../screens/Features/components/FeaturesHeader/FeaturesHeader';
import DataHandler from '../../utils/DataHandler';
import FilterPanel from "./components/FilterPanel/FilterPanel";

class Features extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerData: {},
            filteredFeatures: [],
            originalFeatures: []
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
                <FilterPanel filterData={this.filterData}/>
                <FeatureList features={this.state.filteredFeatures}/>
            </div>
        );
    }

    loadData() {
        const features = DataHandler.addRelevantInformation(ExampleData);
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
