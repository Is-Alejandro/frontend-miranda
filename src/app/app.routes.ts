import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },

  // Al iniciar la app → enviar al login
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  // Cualquier ruta desconocida
  { path: '**', redirectTo: 'auth' }
];
