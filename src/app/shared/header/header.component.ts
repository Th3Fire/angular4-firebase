import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'hello-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: Observable<firebase.User>;
  public isLoggedIn: boolean;
  constructor(public afAuth: AngularFireAuth) { }

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
  }

}
