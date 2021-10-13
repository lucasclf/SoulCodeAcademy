import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../shared/patient.model';
import { PatientsService } from '../shared/patients.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('formPatient', {static: true})formPatient: NgForm
  patient: Patient

  constructor(
    private patientService: PatientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.patient = this.patientService.searchPatientId(id)
  }

  editPatient(): void {
    if(this.formPatient.form.valid) {
      this.patientService.editPatient(this.patient)
      this.router.navigate(['/patients'])
    }
  }
  
}
