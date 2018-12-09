import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PratosCatPage } from './pratos-cat';

@NgModule({
  declarations: [
    PratosCatPage,
  ],
  imports: [
    IonicPageModule.forChild(PratosCatPage),
  ],
})
export class PratosCatPageModule {}
