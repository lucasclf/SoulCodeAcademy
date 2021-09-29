import { Component, OnInit } from '@angular/core';
import { Patient, PatientsService } from '../shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  patients: Patient[]

  constructor(private patientService: PatientsService) { }

  ngOnInit() {
    this.patients = this.listPatients()
  }

  listPatients(): Patient[] {
  return this.patientService.listPatients();
  }

  updateStatus(patient: Patient): void{
    if(confirm('Do you want to change the status of the patient "' +patient.name+'"?')){
      this.patientService.updateStatus(patient.id)
      this.patients = this.listPatients();
    } else{
      this.patients = this.listPatients();
    }
  }

  updateAttend(patient: Patient): void{
    if(confirm('Do you want to change the attend status of the patient "' +patient.name+'"?')){
      this.patientService.updateAttend(patient.id)
      this.patients = this.listPatients();
    } else{
      this.patients = this.listPatients();
    }
  }

  deletePatient(patient: Patient): void {
    if(confirm('Do you want to delete the task "' +patient.name+'"? This action is IRREVERSIBLE!!! ')){
      this.patientService.deletePatient(patient.id)
      this.patients = this.listPatients();
    }
  }

}
