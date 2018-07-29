import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './FeatureHeader.css';

class FeatureHeader extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        const featureName = this.props.headerData;

        return (
            <div className="feature-name" onClick={this.handleOnClick}>
                {featureName}
                <div> click header to go back</div>
            </div>
        )
    }

    handleOnClick() {
        this.props.history.push({
            pathname: '/'
        });
    }
}

export default withRouter(FeatureHeader);