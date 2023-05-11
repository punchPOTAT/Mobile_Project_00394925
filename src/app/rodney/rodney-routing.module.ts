import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RodneyPage } from './rodney.page';

const routes: Routes = [
  {
    path: '',
    component: RodneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RodneyPageRoutingModule {}
