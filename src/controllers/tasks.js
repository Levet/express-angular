const Controller = require('../interfaces/controller');
const TasksModel = require('../models/tasks');

module.exports = class Tasks extends Controller {
    constructor(req, res) {
        super();
        this.model = new TasksModel();
        this.req = req;
        this.res = res;
        this.schema = {
            title: this.Joi.string().required(),
        }
    }

    async list() {
        const tasks = await this.model.getTasks();
        this.successResponse(tasks);
    }

    async create() {
        this.validate();
        const task = await this.model.createTask(this.req.body);
        this.successResponse(task);
    }
}