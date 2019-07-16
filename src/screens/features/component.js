import React, {Component} from 'react';
import './style.css';

import FeatureList from './components/featureList/component';
import FeaturesHeader from './components/header/component';
import DataHandler from '../../utils/dataHandler';
import FeaturesInfoPanel from './components/infoPanel/component';
import FileInfo from '../../ui/components/fileInfo/component';
import ExtraInfo from './components/extraInfo/component';
import CircularProgressbar from 'react-circular-progressbar';
import TimeUtils from '../../utils/timeUtils';

class Features extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerData: {
                overallDuration: 0,
                featuresNumber: 0,
                numberOfPassedFeatures: 0
            },
            filteredFeatures: [],
            originalFeatures: [],
            data: this.props.data.data,
            csharpCoveragePercentage: this.props.data.csharpCoveragePercentage,
            rCoveragePercentage: this.props.data.rCoveragePercentage,
            staticCodeAnalysisResults: this.props.data.staticCodeAnalysisResults
        };

        this.loadData = this.loadData.bind(this);
        this.filterData = this.filterData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }

    componentWillReceiveProps(nextProps) {
        const features = Features.getFeatures(nextProps.data.data);
        const headerData = DataHandler.getHeaderData(features);

        this.setState({
            headerData: headerData,
            filteredFeatures: features,
            originalFeatures: features,
            data: nextProps.data.data,
            csharpCoveragePercentage: nextProps.data.csharpCoveragePercentage,
            rCoveragePercentage: nextProps.data.rCoveragePercentage,
            staticCodeAnalysisResults: nextProps.data.staticCodeAnalysisResults
        });
    }

    render() {
        const features = Features.getFeatures(this.props.data.data);
        const fileInfo = {
            lastModified: this.props.data.lastModified,
            lastChecked: this.props.data.lastChecked,
            bambooAvailable: this.props.data.bambooAvailable
        };
        const headerData = this.state.headerData || {
                overallDuration: 0,
                featuresNumber: 0,
                numberOfPassedFeatures: 0
            };
        const overallDuration = TimeUtils.convertNanosecondsToTime(headerData.overallDuration);
        const featuresNumber = headerData.featuresNumber;
        const numberOfPassedFeatures = headerData.numberOfPassedFeatures;
        const percentageOfPassed = featuresNumber !== 0 ? numberOfPassedFeatures / featuresNumber * 100 : 0;
        const circularIndicatorText = `${numberOfPassedFeatures}/${featuresNumber}`;
        const circularIndicator = <div className="test-status">
            <CircularProgressbar className="circular-progressbar"
                                 percentage={percentageOfPassed}
                                 text={circularIndicatorText}/>
        </div>;

        const issuesNumber = this.state.staticCodeAnalysisResults.issuesNumber;
        const duplicatesNumber = this.state.staticCodeAnalysisResults.duplicatesNumber;
        const issuesNumberAvailable = issuesNumber !== 'Not available';
        const duplicatesNumberAvailable = duplicatesNumber !== 'Not available';
        const unavailableIcon = <i className="fa fa-ban"
                                   aria-hidden="true"/>;
        const issuesNumberElement = issuesNumberAvailable ? issuesNumber : unavailableIcon;
        const duplicatesNumberElement = duplicatesNumberAvailable ? duplicatesNumber : unavailableIcon;

        const extraInfo = [
            {
                title: 'overall results',
                content: circularIndicator
            },
            {
                title: 'overall duration',
                content: <div className="info-tile-bottom-text">{overallDuration}</div>
            },
            {
                title: 'C#',
                content: <div className="info-tile-bottom-text-csharp">
                    <div className="info-tile-bottom-item">
                        <div className="info-tile-bottom-item-ellipsed"> Coverage</div>
                        <div className="info-tile-bottom-item-value info-tile-bottom-item-ellipsed"> {this.state.csharpCoveragePercentage} </div>
                    </div>
                    <div className="info-tile-bottom-item">
                        <div className="info-tile-bottom-item-ellipsed"> Duplicates</div>
                        <div className="info-tile-bottom-item-value info-tile-bottom-item-ellipsed"> {duplicatesNumberElement}</div>
                    </div>
                    <div className="info-tile-bottom-item">
                        <div className="info-tile-bottom-item-ellipsed"> Issues</div>
                        <div className="info-tile-bottom-item-value info-tile-bottom-item-ellipsed"> {issuesNumberElement} </div>
                    </div>
                </div>
            },
            {
                title: 'code coverage R',
                content: <div className="info-tile-bottom-text">{this.state.rCoveragePercentage}</div>
            }
        ];

        return (
            <div className="features">
                <FeaturesHeader headerData={this.state.headerData}/>
                <ExtraInfo extraInfo={extraInfo}/>
                <FeaturesInfoPanel filterData={this.filterData}/>
                <FeatureList features={features}/>
                <FileInfo fileInfo={fileInfo}/>
            </div>
        );
    }

    loadData() {
        const features = DataHandler.addRelevantInformation(this.state.data);
        const headerData = DataHandler.getHeaderData(features);

        this.setState({
            headerData: headerData,
            filteredFeatures: features,
            originalFeatures: features,
            data: this.state.data,
            csharpCoveragePercentage: this.state.csharpCoveragePercentage,
            rCoveragePercentage: this.state.rCoveragePercentage,
            staticCodeAnalysisResults: this.state.staticCodeAnalysisResults
        });
    }

    static getFeatures(data) {
        return DataHandler.addRelevantInformation(data);
    }

    filterData(filterKey) {
        const filteredFeatures = DataHandler.filterData(this.state.originalFeatures, filterKey);
        const filteredHeaderData = DataHandler.getHeaderData(filteredFeatures);

        this.setState({
            headerData: filteredHeaderData,
            filteredFeatures: filteredFeatures,
            originalFeatures: this.state.originalFeatures,
            csharpCoveragePercentage: this.state.csharpCoveragePercentage,
            rCoveragePercentage: this.state.rCoveragePercentage,
            staticCodeAnalysisResults: this.state.staticCodeAnalysisResults
        });
    }
}

export default Features;
