import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { NavBarService } from '../../shared/navbar/navbar.service';
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
  public loading = false;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, 
  private router: Router, public authService: AuthService, public nav: NavBarService) { }

  ngOnInit() {
    // if (this.authService.user) {

    // }
    console.log(this.authService.data);
    let authSubscription = this.afAuth.authState.subscribe(auth => {
      this.nav.hide();
      if (auth != null) {
        console.log("auth : ", auth);
        this.router.navigate(['']);
      }
    })
  }

  loginWithEmail(event, email, password) {
    this.loading = true;
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((data) => {
      console.log("data : ", data);
      if (data.uid != null) {
        this.loading = false;
        console.log("Login with Email success !");
        console.log("user uid : ", data.uid);
        sessionStorage.setItem("user_uid", data.uid);
        this.router.navigate(['']);

      }
    })
      .catch((error: any) => {
        if (error) {
          this.loading = false;
          this.error = error;
          console.log(this.error);
        }
      })
  }

  loginWithGoogle() {
    this.loading = true;
    this.authService.loginWithGoogle().then((data) => {
      console.log("Logged in By Google Account");
      this.router.navigate(['']);
    }).catch((error : any) => {
      if (error) {
        this.loading = false;
        this.error = error;
        console.log(this.error);
      }
    })
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) => {
    //   console.log("signin google: ", data);
    //   if (data.user.uid != null) {
    //     this.loading = false;
    //     console.log("Login with google success !");
    //     sessionStorage.setItem("user_uid", data.user.uid);
    //     this.router.navigate(['']);
    //   }
    // })
    // .catch((error: any) => {
    //   if (error) {
    //     this.loading = false;
    //     this.error = error;
    //     console.log(this.error);
    //   }
    // })
  }

  loginWithFacebook() {
    this.loading = true;
    this.authService.loginWithFacebook().then((data) => {
      console.log("Logged in By Facebook Account");
      this.router.navigate(['']);
    }).catch((error : any) => {
      if (error) {
        this.loading = false;
        this.error = error;
        console.log(this.error);
      }
    })
  }

  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }
  

}
