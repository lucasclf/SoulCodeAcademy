//Importação dos módulos
    import { Routes } from '@angular/router';
    
    import { RegisterTaskComponent } from './register';
    import { ListTaskComponent } from './list';
    import { EditTaskComponent } from './edit';

//Criando a constante com as rotas a ser exportada
    export const taskRoutes: Routes = [
        {
            path:'tasks',
            redirectTo: 'tasks/list'
        },
        {
            path: 'tasks/list',
            component: ListTaskComponent
        },
        {
            path: 'tasks/register',
            component: RegisterTaskComponent
        },
        {
            path: 'tasks/edit/:id',
            component: EditTaskComponent
        }
    ];