import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {Router} from "@angular/router";

import { NavBarService } from '../../shared/navbar/navbar.service';
import { BlogService } from './blog.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import {  TruncatePipe } from './truncate.pipe';

@Component({
  selector: 'hello-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit, AfterViewInit {
  blogs: FirebaseListObservable<any[]>;
  public items: any;
  public loading = false;
  constructor(public nav: NavBarService, private blogService: BlogService, public af: AngularFireDatabase, private router: Router, public _DomSanitizer: DomSanitizer,) { 
    this.loading = true;
    
  }

  ngOnInit() {
    this.nav.show();
  }

  getBlogId(id, titleUrl) {
    console.log("id : ", id);
    console.log("titleUrl : ",titleUrl);
    this.router.navigate(['blog', id, titleUrl]);
  } 

  ngAfterViewInit() {
    this.blogs = this.blogService.getAll(10);
    this.blogs.subscribe((data) => {
      console.log("blog : ", data);
      this.items = data;
      console.log(this.items);
      this.loading = false;
    });
    

}
}
