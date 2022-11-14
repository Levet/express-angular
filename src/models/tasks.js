const fs = require('fs');

module.exports = class Tasks {
    constructor() {
        this.init();
    }

    init() {
        const file = fs.readFileSync('./src/data/tasks.json', 'utf8');
        this.tasks = JSON.parse(file);
    }

    createTask(taskTitle) {
        const task = {
            id: this.tasks.length + 1,
            title: taskTitle,
            complete: false
        }
        this.tasks.push(task);
        this.save();
        return task;
    }

    getTasks() {
        return this.tasks;
    }

    save() {
        fs.writeFileSync('./src/data/tasks.json', JSON.stringify(this.tasks));
    }

    updateTask(id, task) {
        const index = this.tasks.findIndex(t => t.id == id);
        if(index < 0) return;
        this.tasks[index] = task;
        this.save();
        return task;
    }
}