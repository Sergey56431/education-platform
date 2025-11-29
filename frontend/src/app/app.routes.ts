import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages').then(c => c.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages').then(c => c.SignupPage)
  },
  {
    path: '',
    loadComponent: () => import('./core').then(c => c.Layout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages').then(c => c.MainPage)
      },
      {
        path: 'courses',
        loadComponent: () => import('./pages').then(c => c.CoursesPage)
      },
      {
        path: 'homeworks',
        loadComponent: () => import('./pages').then(c => c.HomeworksPage)
      },
      {
        path: 'schedule',
        loadComponent: () => import('./pages').then(c => c.SchedulePage)
      },
      {
        path: 'statistic',
        loadComponent: () => import('./pages').then(c => c.StatisticPage)
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages').then(c => c.AppNotFound)
  }
];
