import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-viaje',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss']
})
export class CrearViajeComponent {

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      origen: ['', [Validators.required]],
      destino: ['', [Validators.required]],
      fechaSalida: ['', [Validators.required]],
      horaSalida: ['', [Validators.required]],
      precio: [null, [Validators.required, Validators.min(1)]],
      bus: ['', [Validators.required]],
      asientosDisponibles: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.formulario.invalid) return;

    const nuevoViaje = this.formulario.value;
    console.log('VIAJE GUARDADO (MOCK):', nuevoViaje);

    alert('Viaje creado correctamente (mock).');

    this.router.navigate(['/admin/viajes/listar']);
  }

}
