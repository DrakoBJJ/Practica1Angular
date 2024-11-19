import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Definir el formulario reactivo con validaciones
  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]), // Validación de campo obligatorio
    password: new FormControl('', [Validators.required]) // Validación de campo obligatorio
  });

  // Variable para mostrar el mensaje de validación
  datos: string = '';

  constructor(private router: Router) {}

  // Método de validación para usuario y contraseña
  isValid(): boolean {
    return this.loginForm.get('usuario')?.value === 'Drako' && this.loginForm.get('password')?.value === 'hola12';
  }

  // Método para manejar el envío del formulario
  login(): void {
    console.log("Hola si que va");
    if (this.isValid()) {
      this.datos = 'Usuario y contraseña correctos';
      this.router.navigate(['/1']);
      
    } else {
      if (this.loginForm.get('usuario')?.value !== 'Drako') {
        this.datos = 'Usuario ingresado incorrecto';
      }
      if (this.loginForm.get('password')?.value !== 'hola12') {
        this.datos = 'Contraseña ingresada incorrecta';
      }
    }
  }
}