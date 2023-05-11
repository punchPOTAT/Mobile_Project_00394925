import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'optimus',
    loadChildren: () => import('./optimus/optimus.module').then( m => m.OptimusPageModule)
  },
  {
    path: 'v1',
    loadChildren: () => import('./v1/v1.module').then( m => m.V1PageModule)
  },
  {
    path: 'bender',
    loadChildren: () => import('./bender/bender.module').then( m => m.BenderPageModule)
  },
  {
    path: 'rodney',
    loadChildren: () => import('./rodney/rodney.module').then( m => m.RodneyPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
