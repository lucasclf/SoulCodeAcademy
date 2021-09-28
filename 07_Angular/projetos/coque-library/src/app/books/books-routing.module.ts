import { Routes } from '@angular/router';
import { ListBooksComponent } from './list';
import { RegisterBooksComponent } from './register';

export const BookRoutes: Routes = [
    { 
        path:'books',
        redirectTo: 'books/list'
    }, 
    { 
        path:'books/list',
        component: ListBooksComponent
    },
    {
        path: 'books/register',
        component: RegisterBooksComponent
    }
];
