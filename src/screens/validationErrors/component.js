import React, {Component} from 'react';
import './style.css';

import ValidationErrorList from './components/errorList/component';
import ValidationErrorsHeader from './components/header/component';

class ValidationErrors extends Component {
    render() {
        return (
            <div className="features">
                <ValidationErrorsHeader/>
                <ValidationErrorList errors={this.props.errors}/>
            </div>
        );
    }
}

export default ValidationErrors;
