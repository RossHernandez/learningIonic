import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const SWAPIURL = environment.swapiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsuarios(){

    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getSwapi(path){
    return this.http.get(`${SWAPIURL}${path}`);
  }

}
