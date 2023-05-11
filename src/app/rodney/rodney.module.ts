import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RodneyPageRoutingModule } from './rodney-routing.module';

import { RodneyPage } from './rodney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RodneyPageRoutingModule
  ],
  declarations: [RodneyPage]
})
export class RodneyPageModule {}
