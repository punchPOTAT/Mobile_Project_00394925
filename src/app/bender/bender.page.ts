import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-bender',
  templateUrl: './bender.page.html',
  styleUrls: ['./bender.page.scss'],
})
export class BenderPage implements OnInit {

  constructor(private NavCtrl:NavController, private dataService:DataService, private storage:Storage) { }

  bots: any[] = [];

  ngOnInit():void {

    this.dataService.getBotData().subscribe(data =>
      {
        this.bots = data.bots;
      } )
  }
}
