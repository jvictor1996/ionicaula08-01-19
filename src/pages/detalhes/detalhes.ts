import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prato } from '../../model/prato';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  prato: Prato;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.prato = this.navParams.get('prato');
  }

}
