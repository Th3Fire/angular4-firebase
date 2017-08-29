import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'hello-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  isValid: boolean = false;
  name: any;
  email: any;
  profileImage: any;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public authService: AuthService, private router: Router,) {
    console.log("displayName : ", authService.displayName);
    console.log("email : ", authService.email);
    this.name = this.authService.displayName;
    this.email = this.authService.email;
    this.profileImage = this.authService.profileImage;
   }

  ngOnInit() {

    
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
        }).catch((error)=>{
          console.log(error);
        })
      }
    });

  }
}


