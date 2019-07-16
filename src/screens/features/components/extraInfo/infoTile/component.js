import React, {Component} from 'react';

import './style.css';

class InfoTile extends Component {
    render() {
        return (
            <div className="info-tile">
                <div className="info-tile-top">{this.props.infoToDisplay.title.toUpperCase()}</div>
                <div className="info-tile-bottom">{this.props.infoToDisplay.content}</div>
            </div>
        )
    }
}

export default InfoTile;