import { Routes } from '@angular/router';

export const CLIENTE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/cliente-home/cliente-home.component')
      .then(m => m.ClienteHomeComponent)
  }
];
    