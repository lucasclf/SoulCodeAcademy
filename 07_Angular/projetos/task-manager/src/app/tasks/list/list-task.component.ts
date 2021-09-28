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
  }

  listTasks(): Task[] {
    return this.taskService.listTasks()
  }

  updateConcluded(task: Task): void{
    if(confirm('Do you want to change the status of the task "' +task.name+'"?')){
      this.taskService.updateConcluded(task.id)
      this.tasks = this.listTasks();
    }
  }

  deleteTask(task: Task): void {
    if(confirm('Do you want to delete the task "' +task.name+'"?')){
      this.taskService.deleteTask(task.id)
      this.tasks = this.listTasks();
    }
  }
}
