import { Injectable } from '@angular/core';
import { Patient } from './patient.model';

@Injectable()
export class PatientsService {

  constructor() { }

  listPatients(): Patient[] {
    let patients = localStorage['patients'];
    return patients ? JSON.parse(patients): []
  }

  registerPatient(newPatient: Patient): void {
    const patients = this.listPatients();
    newPatient.id = new Date().getTime();
    newPatient.active = true;
    newPatient.attend = false;
    patients.push(newPatient);
    localStorage['patients'] = JSON.stringify(patients)
  }

  searchPatientId(id: number): Patient {
    const patients = this.listPatients();
    return patients.find(patient => patient.id === id)
  }

  editPatient(patient: Patient): void{
    const patients = this.listPatients();
    patients.forEach((obj, index, objs) => {
      if(patient.id === obj.id){
        objs[index] = patient
      }
    });
    localStorage['patients'] = JSON.stringify(patients);
  }

  deletePatient(id: number): void{
    let patients = this.listPatients();
    patients = patients.filter(patients => patients.id !== id);
    localStorage['patients'] = JSON.stringify(patients);
  }

  updateStatus(id: number): void{
    let patients = this.listPatients();
    patients.forEach((obj, index, objs) => {
      if (id === obj.id){
        objs[index].active = !obj.active
        objs[index].priority = 0
      }
    });
    localStorage['patients'] = JSON.stringify(patients)
  }

  updateAttend(id: number): void {
    let patients = this.listPatients();
    patients.forEach((obj, index, objs) => {
      if (id === obj.id){
        objs[index].attend = !obj.attend
        if(objs[index].priority == 0){
          objs[index].priority = 3
        } else {
          objs[index].priority = 0
        }
      }
    });
    localStorage['patients'] = JSON.stringify(patients)
  }

}
