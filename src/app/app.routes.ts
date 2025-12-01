import { Routes } from '@angular/router';

export const routes: Routes = [
  // Login (Auth)
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },

  // Cliente
  {
    path: 'cliente',
    loadChildren: () =>
      import('./cliente/cliente.routes').then((m) => m.CLIENTE_ROUTES),
  },

  // Admin
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },

  // Redirección inicial
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  // Wildcard (Última opción)
  { path: '**', redirectTo: 'auth' }
];
