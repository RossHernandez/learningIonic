import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  @ViewChild(IonList) ionlist: IonList;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }
  favorite( user: any){
    console.log('favorite', user);
    this.ionlist.closeSlidingItems();
  }
  share( user: any){
    console.log('share', user.email);
    this.ionlist.closeSlidingItems();
  }
  delete1( user: any){
    console.log('delete', user.name);
    this.ionlist.closeSlidingItems();
  }

}
