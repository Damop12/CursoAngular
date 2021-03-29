import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre ='Juan'
  apellido ='Paez'
  edad = 17
  empresa = 'facegoog'

  // cambiaEmpresa(event:Event){//función
  // this.empresa=(<HTMLInputElement>event.target).value;
  // }

/*llamaEmpresa(value:string){

}*/

habilitacionCuadro=false;

useRegistrado=false;

textoDeRegistro="No hay nadie Registrado";

getRegistroUsuario(){
  this.useRegistrado=false;
}

setusuarioRegistrado(event:Event){
  
  //alert('El usuario se acaba de Registrar');
 //this.textoDeRegistro ="El usuario se acaba de Registrar!"

 if((<HTMLInputElement>event.target).value=="si"){

  this.textoDeRegistro ="El usuario se acaba de Registrar!"
 }else
 this.textoDeRegistro ="No hay nadie Registrado";
}
  constructor() { }

  ngOnInit(): void {
  }

}
