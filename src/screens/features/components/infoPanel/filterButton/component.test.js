import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Component from './component';

describe('features infoPanel filter button rendering', () => {
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
            expect(wrapper.find('.filter-button')).toHaveLength(1);
        });

        it('should render features header', () => {
            expect(wrapper.find('.filter-button .show-undefined')).toHaveLength(1);
        });
    });

    describe('shallow with data', () => {
        let wrapper;
        const props = {
            buttonId: 'passed'
        };

        beforeEach(() => {
            wrapper = shallow(<Component {...props}/>);
        });

        it('should render features header', () => {
            expect(wrapper.find('.filter-button')).toHaveLength(1);
        });

        it('should render features header', () => {
            expect(wrapper.find('.filter-button .show-passed')).toHaveLength(1);
        });
    });
});
