import React, {Component} from 'react';

import './style.css';
import InfoTile from './infoTile/component';

class ExtraInfo extends Component {
    render() {
        const extraInfo = this.props.extraInfo;
        const infoTiles = extraInfo.map((info, index) => <InfoTile key={index} infoToDisplay={info}/>);

        return (
            <div className="extra-info">
                {infoTiles}
            </div>
        )
    }
}

export default ExtraInfo;