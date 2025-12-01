import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [

      // --- DASHBOARD ---
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },

      // ======================
      //        VIAJES
      // ======================
      {
        path: 'viajes',
        children: [
          {
            path: 'listar',
            loadComponent: () =>
              import('./pages/viajes/listar-viajes/listar-viajes.component')
                .then(m => m.ListarViajesComponent)
          },
          {
            path: 'crear',
            loadComponent: () =>
              import('./pages/viajes/crear-viaje/crear-viaje.component')
                .then(m => m.CrearViajeComponent)
          }
          // (la ruta editar la agregaremos más adelante)
        ]
      },

      // ======================
      //        BOLETOS
      // ======================
      {
        path: 'boletos',
        children: [
          {
            path: 'listar',
            loadComponent: () =>
              import('./pages/boletos/listar-boletos/listar-boletos.component')
                .then(m => m.ListarBoletosComponent)
          },
          {
            path: 'registrar',
            loadComponent: () =>
              import('./pages/boletos/registrar-boleto/registrar-boleto.component')
                .then(m => m.RegistrarBoletoComponent)
          }
        ]
      },

      // ======================
      //       PASAJEROS
      // ======================
      {
        path: 'pasajeros',
        children: [
          {
            path: 'listar',
            loadComponent: () =>
              import('./pages/pasajeros/listar-pasajeros/listar-pasajeros.component')
                .then(m => m.ListarPasajerosComponent)
          },
          {
            path: 'registrar',
            loadComponent: () =>
              import('./pages/pasajeros/registrar-pasajero/registrar-pasajero.component')
                .then(m => m.RegistrarPasajeroComponent)
          }
        ]
      }

    ]
  }
];
