import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks/tasks.service';
import { Task } from './tasks/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TasksService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = false;
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.loading = true;
    this.tasksService.listTasks()
    .subscribe((result: any) => {
      this.tasks = result.data;
      this.loading = false;
    });
  }

  createTask(title: string) {
    this.tasksService.createTask(title)
    .subscribe((result: any) => {
      this.getTasks();
    });
  }

  updateTask(task: Task) {
    this.tasksService.updateTask(task)
    .subscribe((result: any) => {
      this.getTasks();
    });
  }

  toggleTaskStatus(task: Task) {
    task.complete = !task.complete;
    this.updateTask(task);
  }

  incomepleteCount() {
    return this.tasks.filter((task: Task) => !task.complete).length;
  }

  totalTaskCount() {
    return this.tasks.length;
  }
}
