import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Component from './component';

describe('header rendering', () => {
    describe('reactDOM', () => {
        it('should render without crashing', () => {
            const div = document.createElement('div');

            ReactDOM.render(<Component/>, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    });

    describe('shallow without data', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Component/>);
        });

        it('should render features header', () => {
            expect(wrapper.find('.features-header')).toHaveLength(1);
        });

        it('should render title', () => {
            const featuresHeaderTitle = wrapper.find('.features-header-title');
            const expectedContent =
                <div className="features-header-title-container">
                    <div>Cucumber</div>
                    <div>LANA</div>
                </div>;

            expect(featuresHeaderTitle).toHaveLength(1);
            expect(featuresHeaderTitle.contains(expectedContent)).toEqual(true);
        });

        it('should render logo', () => {
            expect(wrapper.find('.cucumber-logo')).toHaveLength(1);
        });

        it('should render statistics', () => {
            expect(wrapper.find('.features-header-statistics')).toHaveLength(1);
        });

        it('should render statistics container', () => {
            expect(wrapper.find('.features-header-statistics-container')).toHaveLength(1);
        });

        it('should render test status', () => {
            expect(wrapper.find('.test-status')).toHaveLength(1);
        });

        it('should render duration container', () => {
            expect(wrapper.find('.duration-container')).toHaveLength(1);
        });

        it('should render duration title', () => {
            const durationTitle = wrapper.find('.duration-title');

            expect(durationTitle).toHaveLength(1);
            expect(durationTitle.text()).toEqual("Overall time");
        });

        it('should render circular progressbar', () => {
            const circularProgressbar = wrapper.find('.circular-progressbar');

            expect(circularProgressbar).toHaveLength(1);
            expect(circularProgressbar.prop('text')).toEqual("0/0");
            expect(circularProgressbar.prop('percentage')).toEqual(0);
        });

        it('should render duration time', () => {
            expect(wrapper.find('.duration-time')).toHaveLength(1);
            expect(wrapper.find('.duration-time').text()).toEqual("0s");
        });
    });

    describe('shallow with data', () => {
        let wrapper;
        const props = {
            headerData: {
                overallDuration: 10000000000,
                featuresNumber: 2,
                numberOfPassedFeatures: 1
            }
        };

        beforeEach(() => {
            wrapper = shallow(<Component {...props}/>);
        });

        it('should render circular progressbar', () => {
            expect(wrapper.find('.circular-progressbar')).toHaveLength(1);
        });

        it('should display correct data in circular progressbar', () => {
            const circularProgressbar = wrapper.find('.circular-progressbar');

            expect(circularProgressbar.prop('text')).toEqual("1/2");
            expect(circularProgressbar.prop('percentage')).toEqual(50);
        });

        it('should display correct data in overall time', () => {
            expect(wrapper.find('.duration-time').text()).toEqual("10s");
        });
    });
});
