import {Component} from 'react';
import {juxt, clone, filter} from 'ramda';

const filterKeyMap = {
    passed: feature => feature.testsPassed === true,
    failed: feature => feature.testsPassed === false,
    all: feature => feature
};

class DataHandler extends Component {
    static getHeaderData(features) {
        const overallDuration = features.reduce((prev, feature) => feature.duration + prev, 0);
        const featuresNumber = features.length;
        const numberOfPassedFeatures = features.filter(feature => feature.testsPassed).length;

        return {
            overallDuration: overallDuration,
            featuresNumber: featuresNumber,
            numberOfPassedFeatures: numberOfPassedFeatures
        };
    }

    static addRelevantInformation(features) {
        const getDuration = step => step.result ? step.result.duration ? step.result.duration : 0 : 0;
        const addDurationIfExists = (prev, step) => getDuration(step) + prev;
        const sumDuration = steps => steps.reduce((prev, step) => addDurationIfExists(prev, step), 0);
        const getStatus = step => step.result ? step.result.status ? step.result.status === 'passed' : true : true;
        const andStatusIfExists = (prev, step) => getStatus(step) && prev;
        const getStatusPerScenario = steps => steps.reduce((prev, step) => andStatusIfExists(prev, step), true);
        const getFeatureDuration = elements => elements.reduce((prev, element) => prev + sumDuration(element.steps), 0);
        const getFeatureResult = elements => elements.reduce((prev, element) => prev && getStatusPerScenario(element.steps), true);
        const setScenarioDuration = element => element.duration = sumDuration(element.steps);
        const setDurationPerScenario = feature => feature.elements.map(element => setScenarioDuration(element));
        const setScenarioResult = element => element.testsPassed = getStatusPerScenario(element.steps);
        const setResultPerScenario = feature => feature.elements.map(element => setScenarioResult(element));
        const setFeatureDuration = feature => feature.duration = getFeatureDuration(feature.elements);
        const setDurationPerFeature = features => features.map(feature => setFeatureDuration(feature));
        const setFeatureScenariosNumber = feature => feature.scenariosNumber = feature.elements.length;
        const setScenariosNumberPerFeature = features => features.map(feature => setFeatureScenariosNumber(feature));
        const setFeatureResult = feature => feature.testsPassed = getFeatureResult(feature.elements);
        const setResultPerFeature = features => features.map(feature => setFeatureResult(feature));
        const setDurationPerScenarioPerFeature = features => features.map(feature => setDurationPerScenario(feature));
        const setResultPerScenarioPerFeature = features => features.map(feature => setResultPerScenario(feature));

        const featuresClone = clone(features);
        const modifications = [
            setDurationPerFeature,
            setResultPerFeature,
            setDurationPerScenarioPerFeature,
            setResultPerScenarioPerFeature,
            setScenariosNumberPerFeature
        ];

        juxt(modifications)(featuresClone);

        return featuresClone;
    }

    static filterData(features, filterKey) {
        return filter(filterKeyMap[filterKey], features);
    }
}

export default DataHandler;