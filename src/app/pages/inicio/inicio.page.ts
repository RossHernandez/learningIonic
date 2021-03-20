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
    },
    {
      icon: 'footsteps-outline',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'mic-circle-outline',
      name: 'Button',
      redirecTo: '/button'
    },
    {
      icon: 'library-outline',
      name: 'Cards',
      redirecTo: '/card'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirecTo: '/date-time'
    },
    {
      icon: 'pie-chart-outline',
      name: 'Fabs',
      redirecTo: '/fab'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
