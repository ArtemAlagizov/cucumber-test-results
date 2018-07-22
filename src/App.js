import React, {Component} from 'react';
import './App.css';

import exampleData from './exampleData.json';
import FeatureList from './components/FeatureList/FeatureList';
import HeaderFeatures from './components/HeaderFeatures/HeaderFeatures';
import DataHandler from './components/DataHandler/DataHandler';

class App extends Component {
    constructor(props) {
        super(props);

        this.state ={
            headerData: {},
            features: []
        };
    }

    componentDidMount() {
        const features = DataHandler.addRelevantInformation(exampleData);
        const headerData = DataHandler.getHeaderData(features);

        this.setState({
            headerData: headerData,
            features: features
        });
    }

    render() {
        return (
            <div className="main-container">
                <HeaderFeatures headerData={this.state.headerData}/>
                <FeatureList features={this.state.features}/>
            </div>
        );
    }
}

export default App;
