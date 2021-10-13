import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentesRoutes } from "./componentes";
import { DiretivasRoutes } from "./diretivas";
import { IntroducaoRoutes } from "./introducao/introducao.routing.module";
import { MaterialRoutes } from "./material/material.routing.module";
import { ModulosRoutes } from "./modulos/modulos.routing.modules";
import { PipesRoutes } from "./pipes/pipes.routing.module";
import { ServicosRoutes } from "./servicos/servicos.routing.module";


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    ...ComponentesRoutes,
    ...DiretivasRoutes,
    ...IntroducaoRoutes,
    ...MaterialRoutes,
    ...ModulosRoutes,
    ...PipesRoutes,
    ...ServicosRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}