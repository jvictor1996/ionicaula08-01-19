import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: any;
  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public firebaseauth: AngularFireAuth, public storageService: StorageService) {
  }

  public login(): void {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        if (this.email) {
        }
        else {
        }
        this.exibirToast('Login efetuado com sucesso');
        this.storageService.setLocalUser(this.firebaseauth.auth.currentUser.email);
      })
      .catch((erro: any) => {
        this.exibirToast(erro);
      });
  }

  public cadastrarUsuario(): void {
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        this.exibirToast('Usuário criado com sucesso');
        this.user = this.firebaseauth.auth.currentUser
      })
      .catch((erro: any) => {
        this.exibirToast(erro);
      });
  }

  private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({ duration: 4000, position: 'botton' });
    toast.setMessage(mensagem);
    toast.present();
  }
}