import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DataService } from './data.service'; // Import DataService to use api.

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private dataService: DataService) {}
  bots: any = [];

  ngOnInit(): void {
      this.dataService.getBotData().subscribe(data =>
        {
          this.bots = data.bots;
        } )
  }
}
