import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public fireAuth: AngularFireAuth) {
		fireAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		console.log('Logado utilizando e-mail');
		return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
    }
}