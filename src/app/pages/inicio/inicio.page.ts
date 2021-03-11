import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente [] = [
    {
      icon: 'earth-outline',
      name: 'Action sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'extension-puzzle-outline',
      name: 'Alert',
      redirecTo: '/alerta'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
