const TaskController = require('../controllers/tasks');

module.exports = (app) => {

    app.get('/api/tasks', (req, res) => {
        const taskController = new TaskController(req, res);
        taskController.list();
    });

    app.post('/api/tasks', (req, res) => {
        const taskController = new TaskController(req, res);
        taskController.create(req, res);
    });
}