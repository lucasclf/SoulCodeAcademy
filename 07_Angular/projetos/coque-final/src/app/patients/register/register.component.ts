import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../shared/patient.model';
import { PatientsService } from '../shared/patients.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('formPatient', {static: true})formPatient: NgForm

  patient: Patient

  constructor(private patientService: PatientsService, private router: Router) { }

  ngOnInit() {
    this.patient = new Patient()
  }

  register(): void {
    if(this.formPatient.form.valid){
      this.patientService.registerPatient(this.patient);
      this.router.navigate(['/patients/list']);
    };
  };

}
