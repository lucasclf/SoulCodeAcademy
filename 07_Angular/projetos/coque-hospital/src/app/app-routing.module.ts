import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsRoutes } from './patients';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'patients/list',
    pathMatch:'full'
  },
  ...PatientsRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
