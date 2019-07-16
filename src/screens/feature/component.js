import React, {Component} from 'react';

import DataHandler from '../../utils/dataHandler';
import ScenarioList from './components/scenarioList/element';
import FeatureHeader from './components/header/component';
import FeatureInfoPanel from './components/infoPanel/component';
import FileInfo from '../../ui/components/fileInfo/component';

class Feature extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feature: {},
            data: this.props.data.data
        };

        this.loadData = this.loadData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                feature: this.state.feature,
                data: nextProps.data.data
            });
            this.loadData();
        }
    }

    render() {
        const feature = this.props.location.feature || this.state.feature;
        const fileInfo = {
            lastModified: this.props.data.lastModified,
            lastChecked: this.props.data.lastChecked,
            bambooAvailable:this.props.data.bambooAvailable
        };

        return (
            <div className="feature">
                <FeatureHeader feature={feature}/>
                <FeatureInfoPanel feature={feature}/>
                <ScenarioList feature={feature}/>
                <FileInfo  fileInfo={fileInfo}/>
            </div>
        );
    }

    loadData() {
        const features = DataHandler.addRelevantInformation(this.props.data.data);
        const featureId = this.props.match.params.id;
        const feature = features.find(feature => feature.id === featureId);

        this.setState({
            feature: feature
        });
    }
}

export default Feature;