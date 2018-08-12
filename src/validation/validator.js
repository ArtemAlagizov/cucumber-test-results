import Ajv from 'ajv';

import Schema from './schema';

class Validator {
    static getValidationFunction() {
        const ajv = new Ajv({ allErrors: true });

        return ajv.compile(Schema);
    }
}

export default Validator;