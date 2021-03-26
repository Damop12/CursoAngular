import { Component } from '@angular/core';

@Component({ //es un decorador
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miprimeraApp';
  saludo ='Hola Bien Venido!'
}
