import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthService } from '../../providers/auth.service';
import { NavBarService } from '../../shared/navbar/navbar.service';

@Component({
  selector: 'hello-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, AfterViewInit {
  isValid: boolean = false;
  name: any;
  email: any;
  profileImage: any;
  public loading = false;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public authService: AuthService, private router: Router, public nav: NavBarService) {
    this.loading = true;
  }

  ngOnInit() {
    this.nav.show();
    this.loading = true;
    this.afAuth.auth.currentUser

  }

  getInfoUser() {
    this.authService.authState().subscribe((data) => {
      console.log("checkout user : ", data);
      if (data != null) {
        console.log("displayName : ", data.displayName);
        console.log("email : ", data.email);
        this.name = data.displayName;
        this.email = data.email;
        this.profileImage = data.photoURL;
        this.loading = false;
      }
    });

  }

  ngAfterViewInit() {
    this.getInfoUser();

  }

  updateProfile() {
    console.log("update profile user");
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        firebase.database().ref('users/user_' + user.uid).set({
          email: this.authService.email,
          name: this.authService.displayName,
          username: this.authService.displayName
        }).then(() => {
          console.log("save success")
        }).catch((error) => {
          console.log(error);
        })
      }
    });

  }
}


