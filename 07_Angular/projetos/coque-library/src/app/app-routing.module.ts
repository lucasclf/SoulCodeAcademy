import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRoutes } from './books';

export const router : Routes = [
    {
        path: '',
        redirectTo: 'books/list',
        pathMatch:'full'
    }, 
    ...BookRoutes
];

@NgModule({
    imports : [ 
        RouterModule.forRoot(router)
    ],
    exports : [ 
        RouterModule
    ]
})

export class AppRoutingModule {}

