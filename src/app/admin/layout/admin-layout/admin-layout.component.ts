import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div style="display: flex; height: 100vh;">
    <aside>
  <h3>Miranda Admin</h3>

  <nav>
    <ul>

      <!-- Dashboard -->
      <li>
        <a routerLink="/admin" routerLinkActive="active-link">
          <i class="material-icons">dashboard</i>
          Dashboard
        </a>
      </li>

      <!-- Gestión de Viajes -->
      <li>
        <strong>Gestión de Viajes</strong>
        <ul>
          <li>
            <a routerLink="/admin/viajes/listar" routerLinkActive="active-link">
              <i class="material-icons">list</i>
              Listar viajes
            </a>
          </li>

          <li>
            <a routerLink="/admin/viajes/crear" routerLinkActive="active-link">
              <i class="material-icons">add</i>
              Crear viaje
            </a>
          </li>
        </ul>
      </li>

      <!-- Boletos -->
      <li>
        <strong>Boletos</strong>
        <ul>
          <li>
            <a routerLink="/admin/boletos/listar" routerLinkActive="active-link">
              <i class="material-icons">receipt</i>
              Listar boletos
            </a>
          </li>

          <li>
            <a routerLink="/admin/boletos/registrar" routerLinkActive="active-link">
              <i class="material-icons">add_shopping_cart</i>
              Registrar boleto
            </a>
          </li>
        </ul>
      </li>

      <!-- Pasajeros -->
      <li>
        <strong>Pasajeros</strong>
        <ul>
          <li>
            <a routerLink="/admin/pasajeros/listar" routerLinkActive="active-link">
              <i class="material-icons">group</i>
              Listar pasajeros
            </a>
          </li>

          <li>
            <a routerLink="/admin/pasajeros/registrar" routerLinkActive="active-link">
              <i class="material-icons">person_add</i>
              Registrar pasajero
            </a>
          </li>
        </ul>
      </li>

    </ul>
  </nav>
</aside>

      <!-- CONTENIDO PRINCIPAL -->
      <div style="flex: 1; display: flex; flex-direction: column; background: #f3f4f6;">

        <!-- HEADER SUPERIOR -->
        <header style="
          height: 60px;
          background: white;
          border-bottom: 1px solid #e5e7eb;
        ">
          <div style="
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
          ">
            <!-- Izquierda -->
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 18px; font-weight: 600; color:#1f2937;">
                Panel Administrativo
              </span>
            </div>

            <!-- Derecha -->
            <button style="
              background: #dc2626;
              color: white;
              border: none;
              padding: 8px 14px;
              border-radius: 6px;
              font-weight: 500;
              cursor: pointer;
            ">
              Cerrar sesión
            </button>
          </div>
        </header>

        <!-- CONTENIDO QUE CAMBIA -->
        <main style="flex: 1; padding: 20px;">
          <router-outlet></router-outlet>
        </main>

      </div>

    </div>
  `,
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent { }
