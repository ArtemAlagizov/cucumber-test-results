import React, {Component} from 'react';

import './FilterButton.css';

class FilterPanel extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        const buttonId = this.props.buttonId;
        const buttonClass = `filter-button show-${buttonId}`;

        return (
            <div className={buttonClass} onClick={event => this.handleOnClick(event, buttonId)}/>
        )
    }

    handleOnClick(event, filterKey) {
        this.props.filterData(filterKey);
    }
}

export default FilterPanel;