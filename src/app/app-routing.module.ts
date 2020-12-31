import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)
  },
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
