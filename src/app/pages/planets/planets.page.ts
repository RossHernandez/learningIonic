import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: any;
  id: string;
  path: string;

  constructor( private swapiservice: DataService, private router: Router) { }

  ngOnInit() {
    this.swapiservice.getSwapi('planets').subscribe(data => {
      this.planets = data;
      console.log(this.planets);

    })
  }
  showItem(p){
    let urlElements = p.url.split("/");
    this.id = urlElements[urlElements.length-2];
    this.path = urlElements[urlElements.length-3];
    //console.log(this.id);

    this.router.navigateByUrl(`/${this.path}/${this.id}`);
  }

}
