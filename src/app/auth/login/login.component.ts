import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Creamos el formulario reactivo
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Método donde tu compañero conectará al backend
  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = this.form.value;

    console.log("Datos del formulario para backend:", data);

    // Aquí tu compañero agregará la conexión real:
    // this.authService.login(data).subscribe(...);

  }
}
