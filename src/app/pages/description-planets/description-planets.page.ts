import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-planets',
  templateUrl: './description-planets.page.html',
  styleUrls: ['./description-planets.page.scss'],
})
export class DescriptionPlanetsPage implements OnInit {

  planet: any;
  constructor(private swapiservice: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      let id = params.get('id');
      console.log(id);

      this.planet = this.swapiservice.getSwapi(`planets/${id}`).subscribe(data => {
        this.planet = data;
        console.log(data);

      })
    })


  }

}
