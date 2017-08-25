import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'hello-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  name: any;
  email: any;
  profileImage: any;
  isValid: boolean = false;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) { }

  ngOnInit() {
    console.log("F5 Check");
    this.getUserInfo();
  }
  getUserInfo() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        user.providerData.forEach((data) => {
          console.log("Sign-in provider: " + data.providerId);
          console.log("  Provider-specific UID: " + data.uid);
          console.log("  Name: " + data.displayName);
          console.log("  Email: " + data.email);
          console.log("  Photo URL: " + data.photoURL);
          this.name = data.displayName;
          this.email = data.email;
          this.profileImage = data.photoURL;
        })

      }
    })

  }
}


