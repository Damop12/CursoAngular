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
 // empresa = 'Ecos'
llamaEmpresa(value:string){

}
  constructor() { }

  ngOnInit(): void {
  }

}
