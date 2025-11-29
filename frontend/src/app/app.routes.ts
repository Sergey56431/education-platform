import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages').then(c => c.LoginPage)
  },
  {
    path: '',
    loadComponent: () => import('./core').then(c => c.Layout),
    children: [
      // {
      //   path: 'courses',
      // },
      // {
      //   path: 'homework'
      // },
      // {
      //   path: 'schedule',
      // },
      // {
      //   path: 'statistic',
      // }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages').then(c => c.AppNotFound)
  }
];
