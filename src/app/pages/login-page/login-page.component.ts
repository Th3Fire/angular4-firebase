import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

//Service
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'hello-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public error: any;
  public isLoggedIn: boolean;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public authService: AuthService, private router: Router) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.afAuth.authState;
  }

  loginWithEmail(event, email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((data) => {
      console.log(this);
      if (data.user.uid != null) {
        console.log("Login with Email success !");
        sessionStorage.setItem("user_uid", data.user.uid);
        this.router.navigate(['']);
      }
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      })
  }

  loginWithGoogle() {
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) => {
    //   console.log("signin google: ", data);
    //   if (data.user.uid != null) {
    //     console.log("Login with google success !");
    //     sessionStorage.setItem("user_uid", data.user.uid);
    //     this.router.navigate(['']);
    //   }
    // })
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }

  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }
  ngOnInit() {
    let authSubscription = this.afAuth.authState.subscribe(auth => {
      if (auth != null) {
        console.log("auth : " , auth);
        this.router.navigate(['']);
      }
    })
  }

}
