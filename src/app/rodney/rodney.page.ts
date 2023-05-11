import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-rodney',
  templateUrl: './rodney.page.html',
  styleUrls: ['./rodney.page.scss'],
})
export class RodneyPage implements OnInit {

  constructor(private NavCtrl:NavController, private dataService:DataService, private storage:Storage) { }

  bots: any[] = [];

  ngOnInit(): void {

    this.dataService.getBotData().subscribe(data =>
      {
        this.bots = data.bots;
      } )
  }

}
