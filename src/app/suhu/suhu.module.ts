import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuhuPageRoutingModule } from './suhu-routing.module';

import { SuhuPage } from './suhu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuhuPageRoutingModule
  ],
  declarations: [SuhuPage]
})
export class SuhuPageModule {}
