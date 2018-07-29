import React, {Component} from 'react';

import './FilterPanel.css';

class FilterPanel extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        return (
            <div className="filter-panel">
                <div className="filter-button show-passed" onClick={event => this.handleOnClick(event, 'passed')}/>
                <div className="filter-button show-failed" onClick={event => this.handleOnClick(event, 'failed')}/>
                <div className="filter-button show-all" onClick={event => this.handleOnClick(event, 'all')}/>
            </div>
        )
    }

    handleOnClick(event, filterKey) {
        this.props.filterData(filterKey);
    }
}

export default FilterPanel;