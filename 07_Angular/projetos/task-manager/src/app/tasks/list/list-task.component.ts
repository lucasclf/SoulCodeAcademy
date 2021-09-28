import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '..';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.listTasks()
    this.tasks = [
      new Task(1, 'Tarefa 01', false),
      new Task(2, 'Tarefa 02', true),
      new Task(3, 'Tarefa 03', false)
    ]
  }

  listTasks(): Task[] {
    return this.taskService.listTasks()
  }

}
