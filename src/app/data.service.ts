import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getBotData():Observable<any> { // Gets the data from the json file when called
    return this.http.get("https://www.jsonblob.com/api/jsonblob/1106177335249616896");
  }
}
