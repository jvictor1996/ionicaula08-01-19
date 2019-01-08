import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prato } from '../../model/prato';
import { PRATOS } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-pratos-cat',
  templateUrl: 'pratos-cat.html',
})
export class PratosCatPage {

  id_categoria: number;
  pratos: Prato[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id_categoria = this.navParams.get('id');

    for (var item in PRATOS) {
      if (PRATOS[item].idCat == this.id_categoria)
        this.pratos.push(PRATOS[item]);
    }
  }

  detalhes(prato : Prato){
    this.navCtrl.push('DetalhesPage',{prato: prato});
  }
}