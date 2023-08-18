import { Component,OnInit } from '@angular/core';
//Importamos nuestra interfaz
import { TarjetasInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //Propiedad Publica (tipo array)
  public info: TarjetasInicio[];

//Inicializa la propiedad Info
  constructor(){
    this.info=[
     {
      id:"1",
      titulo: "MATE",
      material:"cuero",
      descripcion:"Foto de un mate",
      imagen:"https://tiendademate.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-03-25-at-4.10.07-PM-1.jpeg",
      alt:""
    },
    {
    id:"",
    titulo:"",
    material:"cuero",
    descripcion:"",
    imagen:"",
    alt:""
    }
    ]
  }
ngOnInit():void{

}
}
[]
