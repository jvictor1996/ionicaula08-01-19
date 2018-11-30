import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  VetorImagem: any = [];
  constructor(public navCtrl: NavController) {
      this.VetorImagem = [
        {'imagem':'../../assets/imgs/indice.jpg'},
        {'imagem':'../../assets/imgs/indice1.jpg'},
        {'imagem':'../../assets/imgs/indice3.jpg'},
  ]

      
  }


}
