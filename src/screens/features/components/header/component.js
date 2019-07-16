import React, {Component} from 'react';
import 'react-circular-progressbar/dist/styles.css';

import './style.css';
import cucumberLogo from '../../../../rickle.png';
import asmlLogo from '../../../../asml_logo.png';

class FeaturesHeader extends Component {
    render() {
        return (
            <div className="features-header">
                <div className="features-header-title">
                    <div className="features-header-title-container">
                        <div>Cucumber</div>
                        <div>LANA</div>
                    </div>
                    <div>
                        <img src={cucumberLogo}
                             className="cucumber-logo"
                             alt={cucumberLogo}/>
                    </div>
                </div>
                <div className="features-header-extra-info">
                    <div className="features-header-extra-info-testbench">
                        <div className="features-header-extra-info-asml-logo">
                            <img src={asmlLogo}
                                 className="asml-logo"
                                 alt={asmlLogo}/>
                        </div>
                        <div> Test bench 136 </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturesHeader;