const Joi = require('joi');

module.exports = class Controller {
    constructor() {
        this.model = null;
        this.Joi = Joi;
    }

    validate() {
        if(!this.schema) {
            throw new Error('Schema not defined');
        }

        const result = this.schema.validate(this.req.body);

        if(result.error) {
            return this.validationFailureResponse(result.error);
        }

        return;
    }

    validationFailureResponse(error) {
        this.res.status(422).json({
            error
        });
    }

    successResponse(data) {
        this.res.json({
            data
        });
    }
}