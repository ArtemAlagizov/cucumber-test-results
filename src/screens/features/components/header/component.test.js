import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Header from './component';

describe('header shallow rendering', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render header title', () => {
        const wrapper = shallow(<Header/>);
        const featuresHeaderTitle = wrapper.find('.features-header-title');
        const expectedContent =
            <div className="features-header-title-container">
                <div>Cucumber</div>
                <div>LANA</div>
            </div>;

        expect(featuresHeaderTitle).toHaveLength(1);
        expect(featuresHeaderTitle.contains(expectedContent)).toEqual(true);
    });

    it('should render header logo', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.find('.cucumber-logo')).toHaveLength(1);
    });

    it('should render header statistics', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.find('.features-header-statistics')).toHaveLength(1);
    });

    it('should render header statistics container', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.find('.features-header-statistics-container')).toHaveLength(1);
    });

    it('should render header test status', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.find('.test-status')).toHaveLength(1);
    });

    it('should render header duration container', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.find('.duration-container')).toHaveLength(1);
    });

    it('should render header duration time', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.find('.duration-time')).toHaveLength(1);
    });
});
