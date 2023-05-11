import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenderPage } from './bender.page';

const routes: Routes = [
  {
    path: '',
    component: BenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenderPageRoutingModule {}
