import { Component, OnInit } from '@angular/core';
import { PageService } from '../shared/page.service';
import { Page } from '../shared/page.model';

import {Router} from "@angular/router";

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'hello-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  pages: Page[];
  public items: any;
  user: any;
  public userUID = sessionStorage.getItem('user_uid');
  messageModel: string = '';
  likes: FirebaseListObservable<number[]>;
  constructor(private pageService: PageService, public af: AngularFireDatabase, private router: Router) {

  }

  ngOnInit() {
    this.getPages();
    this.getItem();

    var user = this.userUID;
    console.log("current user : ", user);
    if (user == null || user == '') {
      console.log("user null");
      this.router.navigate(['login']);
    }

  }

  getPages() {
    var newPostKey = firebase.database().ref().child('posts').push().key;
    console.log("get key for new post : ", newPostKey);
    this.pages = this.pageService.getPages();
  }

  getItem() {
    const queryObservable = this.af.list('/messages', {
      query: {
        limitToLast: 50,
        orderByChild: 'timeSend'
      }
    });
    queryObservable.subscribe(queriedItems => {
      console.log("Get Iten")
      this.items = queriedItems;
    });
  }

  sendMessage(message) {
    var countItem = 0;
    this.messageModel = '';
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var newPostKey = firebase.database().ref().child('posts').push().key

        var ref = firebase.database().ref("items/count");
        ref.transaction(function (current_value) {
          
          console.log("current value : ",current_value);
          if (current_value == null) {
            current_value = 0;
          }
          countItem = current_value + 1;
          return countItem;
        }).then(() => {

          console.log(countItem);
          firebase.database().ref('messages/item_' + user.uid + '_' + new Date()).set({
            message: message,
            timeSend: ''+new Date()
          })
        })




        //write user data into users database


      }
    });
  }

}
