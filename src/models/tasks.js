const fs = require('fs');

module.exports = class Tasks {
    constructor() {
        this.init();
    }

    init() {
        const file = fs.readFileSync('./src/data/tasks.json', 'utf8');
        this.tasks = JSON.parse(file);
    }

    createTask(task) {
        task.completed = false;
        this.tasks.push(task);
        this.save();
        return task;
    }

    getTasks() {
        return this.tasks;
    }

    save() {
        fs.writeFileSync('./data/tasks.json', JSON.stringify(this.tasks));
    }
}