import { Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';


export enum AppModules {
    HOME = "home"
}

export const routes: Routes = [
    {
        path: "",
        component: HomeView
    },
    {
        path: AppModules.HOME,
        component: HomeView
    }
];
