import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  displayName: string;
  email: string;
  profileImage: string;
  data: any;
  constructor(private af: AngularFireAuth, private router: Router) {
    this.user = af.authState;
    af.authState.subscribe((data) => {
      if (data == null) {
        router.navigate(['login']);
      }
    })
   }
  
  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  authState() {
    return this.af.authState;
  }

  logout() {
    return this.af.auth.signOut();
  }
}
