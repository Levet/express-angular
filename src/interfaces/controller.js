const Joi = require('joi');

module.exports = class Controller {
    constructor(req, res) {
        this.model = null;
        this.Joi = Joi;
        this.req = req;
        this.res = res;
    }

    validate() {
        if(!this.schema) {
            throw new Error('Schema not defined');
        }

        const result = this.schema.validate(this.req.body);

        if(result.error) {
            return this.validationFailureResponse(result.error);
        }

        return true;
    }

    validationFailureResponse(error) {
        return this.res.status(422).json({
            error
        });
    }

    successResponse(data) {
        return this.res.json({
            data
        });
    }
}