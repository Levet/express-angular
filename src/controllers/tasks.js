const Controller = require('../interfaces/controller');
const TasksModel = require('../models/tasks');

module.exports = class Tasks extends Controller {
    constructor(req, res) {
        super(req, res);
        this.model = new TasksModel();
        this.schema = this.Joi.object({
            id: this.Joi.number().integer(),
            title: this.Joi.string().required(),
            complete: this.Joi.boolean(),
        });
    }

    async list() {
        const tasks = await this.model.getTasks();
        this.successResponse(tasks);
    }

    async create() {
        const valid = this.validate();
        if(valid !== true) return;
        
        const task = await this.model.createTask(this.req.body.title);
        this.successResponse(task);
    }

    async update() {
        const valid = this.validate();
        if(valid !== true) return;
        const task = await this.model.updateTask(this.req.params.id, this.req.body);
        this.successResponse(task);
    }
}