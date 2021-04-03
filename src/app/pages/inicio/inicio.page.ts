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
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirecTo: '/grid'
    },
    {
      icon: 'aperture-outline',
      name: 'Infinite scroll',
      redirecTo: '/infinite'
    },
    {
      icon: 'receipt-outline',
      name: 'Input forms',
      redirecTo: '/input'
    },
    {
      icon: 'newspaper-outline',
      name: 'List Sliding',
      redirecTo: '/list'
    },
    {
      icon: 'list-outline',
      name: 'List Reorder',
      redirecTo: '/list-reorder'
    },
    {
      icon: 'planet-outline',
      name: 'Planets',
      redirecTo: '/planets'
    },
    {
      icon: 'person-circle-outline',
      name: 'Peoples',
      redirecTo: '/peoples'
    },
    {
      icon: 'airplane-outline',
      name: 'Starships',
      redirecTo: '/starships'
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
