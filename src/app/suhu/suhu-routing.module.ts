import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuhuPage } from './suhu.page';

const routes: Routes = [
  {
    path: '',
    component: SuhuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuhuPageRoutingModule {}
