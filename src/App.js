import React, {Component} from 'react';
import './App.css';

import Features from './screens/features/component';
import Validator from './validation/validator';
import ExampleData from './validation/exampleData.json';
import ValidationErrors from './screens/validationErrors/component';

class App extends Component {
    render() {
        const validationFunction = Validator.getValidationFunction();
        const isIncomingDataValid = validationFunction(ExampleData);
        const resultingTemplate = isIncomingDataValid ?
            <Features dataFile={ExampleData}/> :
            <ValidationErrors errors={validationFunction.errors}/>;

        return (
            resultingTemplate
        );
    }
}

export default App;
