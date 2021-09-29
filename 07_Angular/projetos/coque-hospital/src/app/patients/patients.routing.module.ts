import { Routes } from '@angular/router';
import { EditComponent } from './edit';
import { ListComponent } from './list';
import { RegisterComponent } from './register';

export const PatientsRoutes: Routes = [
    { 
        path:'patients',
        redirectTo: 'patients/list'
    }, 
    { 
        path:'patients/list',
        component: ListComponent
    },
    {
        path: 'patients/register',
        component: RegisterComponent
    },
    {
        path: 'patients/edit/:id',
        component: EditComponent
    }
];