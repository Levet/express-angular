const TaskController = require('../controllers/tasks');

module.exports = (app) => {

    app.get('/api/tasks', (req, res) => {
        const taskController = new TaskController(req, res);
        taskController.list();
    });

    app.post('/api/tasks', (req, res) => {
        const taskController = new TaskController(req, res);
        taskController.create();
    });

    app.put('/api/tasks/:id', (req, res) => {
        const taskController = new TaskController(req, res);
        taskController.update();
    });
}