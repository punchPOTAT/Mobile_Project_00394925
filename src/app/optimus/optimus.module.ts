import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptimusPageRoutingModule } from './optimus-routing.module';

import { OptimusPage } from './optimus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptimusPageRoutingModule
  ],
  declarations: [OptimusPage]
})
export class OptimusPageModule {}
