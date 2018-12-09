import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Categoria } from '../../model/categoria';
import { CATEGORIA } from '../../config/api.config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categorias: Categoria[] = CATEGORIA;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navPratos(id_categoria: number) {
    this.navCtrl.push('PratosCatPage', { idCat: id_categoria });
  }

}

