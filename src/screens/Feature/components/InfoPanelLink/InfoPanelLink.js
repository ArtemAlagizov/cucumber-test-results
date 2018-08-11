import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './InfoPanelLink.css';

class InfoPanelLink extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        return (
            <div className="info-panel-link" onClick={this.handleOnClick}>
                <FontAwesome className="arrow-left" name="arrow-left"/>
                Back to overview
            </div>
        )
    }

    handleOnClick() {
        this.props.history.push({
            pathname: '/'
        });
    }
}

export default withRouter(InfoPanelLink);