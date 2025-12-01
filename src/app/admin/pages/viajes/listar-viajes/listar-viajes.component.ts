import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Viaje {
  id: number;
  origen: string;
  destino: string;
  fecha: string;
  hora: string;
  precio: number;
}

@Component({
  selector: 'app-listar-viajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-viajes.component.html',
  styleUrls: ['./listar-viajes.component.scss']
})
export class ListarViajesComponent {
  viajes: Viaje[] = [
    { id: 1, origen: 'Lima', destino: 'Chimbote', fecha: '2025-12-01', hora: '08:00', precio: 50 },
    { id: 2, origen: 'Chimbote', destino: 'Lima', fecha: '2025-12-01', hora: '15:00', precio: 55 }
  ];
}
