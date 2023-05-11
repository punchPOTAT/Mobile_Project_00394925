import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenderPageRoutingModule } from './bender-routing.module';

import { BenderPage } from './bender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenderPageRoutingModule
  ],
  declarations: [BenderPage]
})
export class BenderPageModule {}
