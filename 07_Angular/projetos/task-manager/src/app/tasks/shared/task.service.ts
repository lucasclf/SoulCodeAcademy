import { Injectable } from '@angular/core';
import { Task } from '.';

@Injectable()
export class TaskService {

  constructor() { }

  listTasks(): Task[]{
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks): []
  }

  registerTask(newTask: Task): void{
    const tasks = this.listTasks();
    newTask.id = new Date().getTime();
    tasks.push(newTask);
    localStorage['tasks'] = JSON.stringify(tasks)
  }

  searchTaskId(id: number): Task {
    const tasks = this.listTasks();
    return tasks.find(task => task.id === id)
  }

  editTask(task: Task): void{
    const tasks = this.listTasks();
    tasks.forEach((obj, index, objs) => {
      if(task.id === obj.id){
        objs[index] = task
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  deleteTask(id: number): void{
    let tasks = this.listTasks();
    tasks = tasks.filter(tasks => tasks.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  updateConcluded(id: number): void{
    let tasks = this.listTasks();
    tasks.forEach((obj, index, objs) => {
      if (id === obj.id){
        objs[index].concluded = !obj.concluded
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks)
  }

}
