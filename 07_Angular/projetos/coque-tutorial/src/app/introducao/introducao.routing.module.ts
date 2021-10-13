import { Routes } from "@angular/router";
import { IntroducaoComponent } from "./components";
import { HomeComponent } from "./components/home/home.component";
import { PooComponent } from "./components/poo/poo.component";
import { TypescriptComponent } from "./components/typescript/typescript.component";


export const IntroducaoRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'introducao',
        component: IntroducaoComponent
    },
    {
        path: 'typescript',
        component: TypescriptComponent
    },
    {
        path: 'poo',
        component: PooComponent
    }
];