//Importação dos módulos
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { taskRoutes } from './tasks';


//Criando a constante que receberá as rotas
    export const router: Routes = [
        {
            path: '',
            redirectTo: 'tasks/list',
            pathMatch: 'full'
        },
        ...taskRoutes
    ];

//Definindo as importações do módulo pelo decoradorNgModule
    @NgModule({
        imports:[ 
            RouterModule.forRoot(router)
         ],
        exports:[ 
            RouterModule
         ]
    })

//Criando a classe de rotas
    export class AppRoutingModule {}