import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-v1',
  templateUrl: './v1.page.html',
  styleUrls: ['./v1.page.scss'],
})
export class V1Page implements OnInit {

  constructor(private NavCtrl:NavController, private dataService:DataService, private storage:Storage) { }

  bots: any[] = [];

  ngOnInit(): void {

    this.dataService.getBotData().subscribe(data =>
    {
        this.bots = data.bots;
    } )
  }

  async OpenBrowser() {
    await Browser.open({url: 'https://store.steampowered.com/app/1229490/ULTRAKILL/'})
  }
}
