import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Component } from '@angular/core';
import { Router } from "@angular/router";

//Service
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'hello-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public authService: AuthService, private router: Router) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

    // this.afAuth.authState.subscribe((auth) => {
    //   if (auth == null) {
    //     console.log("Logged out");
    //     this.isLoggedIn = false;
    //     this.user_displayName = '';
    //     this.user_email = '';
    //     this.router.navigate(['login']);
    //   } else {
    //     this.isLoggedIn = true;
    //     this.user_displayName = auth.displayName;
    //     this.user_email = auth.email;
    //     console.log("Logged in");
    //     console.log("auth");
    //     this.router.navigate(['']);
    //   }
    // })

  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }
}
