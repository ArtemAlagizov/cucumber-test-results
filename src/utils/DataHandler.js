import {Component} from 'react';
import {clone, filter, juxt, max} from 'ramda';

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
        const setDurationPerStep = element => element.steps.map(step => step.duration = step.result.duration || 0);
        const setResultPerStep = element => element.steps.map(step => step.testsPassed = getStatus(step));
        const setDurationPerScenario = feature => feature.elements.map(element => setScenarioDuration(element));
        const setDurationPerStepPerScenario = feature => feature.elements.map(element => setDurationPerStep(element));
        const setScenarioResult = element => element.testsPassed = getStatusPerScenario(element.steps);
        const setResultPerScenario = feature => feature.elements.map(element => setScenarioResult(element));
        const setResultPerStepPerScenario = feature => feature.elements.map(element => setResultPerStep(element));
        const setFeatureDuration = feature => feature.duration = getFeatureDuration(feature.elements);
        const setDurationPerFeature = features => features.map(feature => setFeatureDuration(feature));
        const setFeatureScenariosNumber = feature => feature.scenariosNumber = feature.elements.length;
        const setScenariosNumberPerFeature = features => features.map(feature => setFeatureScenariosNumber(feature));
        const setFeatureResult = feature => feature.testsPassed = getFeatureResult(feature.elements);
        const setResultPerFeature = features => features.map(feature => setFeatureResult(feature));
        const setDurationPerScenarioPerFeature = features => features.map(feature => setDurationPerScenario(feature));
        const setDurationPerStepPerScenarioPerFeature = features => features.map(feature => setDurationPerStepPerScenario(feature));
        const setResultPerScenarioPerFeature = features => features.map(feature => setResultPerScenario(feature));
        const setResultPerStepPerScenarioPerFeature = features => features.map(feature => setResultPerStepPerScenario(feature));
        const getMaxScenarioTime = elements => max(...elements.map(element => element.duration));
        const setMaxScenarioTimePerFeature = features => features.map(feature => feature.maxScenarioTime = getMaxScenarioTime(feature.elements));
        const setScenarioTimeRate = (element, feature) => element.timeRate = element.duration / feature.maxScenarioTime;
        const setTimeRatePerScenario = feature => feature.elements.map(element => setScenarioTimeRate(element, feature));
        const setTimeRatePerScenarioPerFeature = features => features.map(feature => setTimeRatePerScenario(feature));
        const setStepTimeRate = (steps, maxTime) => steps.map(step => step.timeRate = step.duration / maxTime);
        const setTimeRatePerStep = (elements, maxTime) => elements.map(element => setStepTimeRate(element.steps, maxTime));
        const setTimeRatePerStepPerScenario = feature => setTimeRatePerStep(feature.elements, feature.maxScenarioTime);
        const setTimeRatePerStepPerScenarioPerFeature = features => features.map(feature => setTimeRatePerStepPerScenario(feature));

        const featuresClone = clone(features);
        const modifications = [
            setDurationPerFeature,
            setResultPerFeature,
            setDurationPerScenarioPerFeature,
            setResultPerScenarioPerFeature,
            setScenariosNumberPerFeature,
            setDurationPerStepPerScenarioPerFeature,
            setResultPerStepPerScenarioPerFeature,
            setMaxScenarioTimePerFeature,
            setTimeRatePerScenarioPerFeature,
            setTimeRatePerStepPerScenarioPerFeature
        ];

        juxt(modifications)(featuresClone);

        return featuresClone;
    }

    static filterData(features, filterKey) {
        return filter(filterKeyMap[filterKey], features);
    }
}

export default DataHandler;