import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Task, TaskService } from '../shared';


@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})
export class RegisterTaskComponent implements OnInit {

  @ViewChild('formTask', {static: true})formTask: NgForm;
  
  task: Task;

  constructor(private taskService: TaskService, private router: Router) { };

  ngOnInit() {
    this.task = new Task();
  };

  register(): void {
    if(this.formTask.form.valid){
      this.taskService.registerTask(this.task);
      this.router.navigate(['/tasks/list']);
    };
  };

};
