import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Usuario } from "src/app/models/usuario";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  hide= true; //input de contraseña
  constructor(public servicoAuth:AuthService){}

//importacion de modelo
  usuarios: Usuario ={
  uid:'',
  nombre:'',
  contrasena:''
  }

//registrase
  async registrarse(){
  const credenciales={
  nombre: this.usuarios.nombre,
  contrasena: this.usuarios.contrasena
  };
  const res = await this.servicoAuth.registrar(credenciales.nombre,credenciales.contrasena)
  .then(res=> {
alert("ha agregado un nuevo usuario")
  })
console.log(res)
}
}