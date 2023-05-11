import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-optimus',
  templateUrl: './optimus.page.html',
  styleUrls: ['./optimus.page.scss'],
})
export class OptimusPage implements OnInit {

  constructor(private NavCtrl:NavController, private dataService:DataService, private storage:Storage) { }

  bots: any[] = [];

  ngOnInit(): void {
  // Gets data from JSON file.
    this.dataService.getBotData().subscribe(data =>
      {
        this.bots = data.bots;
      } )
  }

  // Opens a browser page to the URL below
  async OpenBrowser() {
    await Browser.open({url: 'https://www.imdb.com/title/tt5090568/'})
  }
}
