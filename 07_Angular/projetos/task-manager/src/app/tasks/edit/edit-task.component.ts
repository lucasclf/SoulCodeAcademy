import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task, TaskService } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @ViewChild('formTask', {static: true})formTask: NgForm
  task: Task

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.task = this.taskService.searchTaskId(id);
  }

  editTask(): void {
    if(this.formTask.form.valid){
      this.taskService.editTask(this.task)
      this.router.navigate(['/tasks'])
    }
  }

}
