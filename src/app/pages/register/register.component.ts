import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Router } from "@angular/router";

@Component({
  selector: 'hello-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public error: any;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  user: any;
  public loading = false;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
  }

  register(event, name, email, password) {
    this.loading = true;
    event.preventDefault();

    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          sessionStorage.setItem("user_uid", user.uid);
          //write user data into users database
          var newPostKey = firebase.database().ref().child('posts').push().key
          firebase.database().ref('users/user_' + user.uid).set({
            username: name,
            email: email,
            name: name,
            user_level: 0
          }).catch((error: any) => {
            if (error) {
              this.loading = false;
              this.error = error;
              console.log(this.error);
            }
          })
        }
      })
    })
      .then(() => {
        this.loading = false;
        this.router.navigate(['']);
      })
      .catch((error: any) => {
        if (error) {
          this.loading = false;
          this.error = error;
          console.log(this.error);
        }
      })

  }

  ngOnInit() {
  }

}
