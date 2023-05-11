import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptimusPage } from './optimus.page';

const routes: Routes = [
  {
    path: '',
    component: OptimusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptimusPageRoutingModule {}
