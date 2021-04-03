import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.page.html',
  styleUrls: ['./peoples.page.scss'],
})
export class PeoplesPage implements OnInit {

  people: any;

  constructor( private swapiservice: DataService) { }

  ngOnInit() {
    this.swapiservice.getSwapi('people').subscribe(data => {
      this.people = data;
      console.log(this.people);

    })
  }

}
