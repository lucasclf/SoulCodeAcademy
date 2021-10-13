import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CientificaRoutes } from "./cientifica/cientifica.routing.module";
import { ConversorRoutes } from "./conversor/conversor.routing.module";
import { DashboardRoutes } from "./dashboard/dashboard.routing.module";
import { PatientsRoutes } from "./patients";
import { VelhaRoutes } from "./velha/velha.routing.module";


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
    ...CientificaRoutes,
    ...ConversorRoutes,
    ...VelhaRoutes,
    ...PatientsRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}