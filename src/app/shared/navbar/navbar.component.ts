import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Router } from "@angular/router";

import { NavBarService } from "./navbar.service";

@Component({
  moduleId: module.id,
  selector: 'hello-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: Observable<firebase.User>;
  public isLoggedIn: boolean;
  routerLinkActiveOptions: {exact: boolean}
  constructor(public afAuth: AngularFireAuth, private router: Router, public nav: NavBarService) { }

  ngOnInit() {
    
    this.user = this.afAuth.authState;
    let authSubscription = this.afAuth.authState.subscribe(auth => {
      if (auth == null) {
        this.isLoggedIn = false;
        sessionStorage.removeItem('user_uid');
      } else {
        this.isLoggedIn = true;
      }
    })
  }

  logout() {
    console.log("clicked Logout");
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  login() {
    console.log("clicked login");
    this.router.navigate(['login']);
  }

}
