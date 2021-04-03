import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

  starShips: any;

  constructor( private swapiservice: DataService) { }

  ngOnInit() {
    this.swapiservice.getSwapi('starships').subscribe(data => {
      this.starShips = data;
      console.log(this.starShips);

    })
  }

}
