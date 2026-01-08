import { Routes } from '@angular/router';
import {Home} from './features/home/home';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.Home),
  },
  {
    //for now this will be the main login form but will change this to lazy loading afterward
    //to make lazy loading will need to change to loadChildren and route to the
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register').then((m) => m.Register),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./features/food-intolerance/pages/overview/overview').then((m) => m.Overview),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];
