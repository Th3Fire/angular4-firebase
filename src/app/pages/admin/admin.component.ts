import { Component, OnInit, AfterViewInit } from '@angular/core';

import {Router} from "@angular/router";

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { NavBarService } from '../../shared/navbar/navbar.service';
import { AuthService } from '../../providers/auth.service';

declare var $ :any;

@Component({
  selector: 'hello-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
  public loading = false;
  content: string;
  title: string;
  constructor(public nav: NavBarService, public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router, public authService: AuthService) {
    this.loading = true;
   }

  ngOnInit() {
    this.nav.show();
    $.FroalaEditor.DefineIcon('alert', {NAME: 'info'});
    $.FroalaEditor.RegisterCommand('alert', {
      title: 'Hello',
      focus: false,
      undo: false,
      refreshAfterCallback: false,

      callback: function () {
        alert('Hello!');
      }
    });
    this.loading = false;
  }

  public options: Object = {
    charCounterCount: true,
  };

  ngAfterViewInit() {
    
  }

  post() {
    var countItem = 0;
    var newPostKey = firebase.database().ref().child('posts').push().key

        var ref = firebase.database().ref("count_blog");
        ref.transaction(function (current_value) {
          
          console.log("current value : ",current_value);
          if (current_value == null) {
            current_value = 0;
          }
          countItem = current_value + 1;
          return countItem;
        }).then(() => {

          console.log(countItem);
          firebase.database().ref('blog/blog_' + countItem).set({
            id: countItem,
            title: this.title,
            title_url: this.getTitleUrl(this.title),
            body: this.content,
            create_date: ''+new Date(),
            user_id: this.getUserUid()
          })
        })
  }

  getTitleUrl(title) {
    console.log("title : ", title);
    const titleUrl = title.replace(" ", "-");
    console.log("replace : ", titleUrl);
    return titleUrl;
  }

  getUserUid() {
    return "xxxx";
    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
        
    //   } 
    // })

    
  }

}
