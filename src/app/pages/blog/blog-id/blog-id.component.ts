import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { NavBarService } from '../../../shared/navbar/navbar.service';
import { BlogService } from '../blog.service';
declare var $: any;
@Component({
  selector: 'hello-blog-id',
  templateUrl: './blog-id.component.html',
  styleUrls: ['./blog-id.component.css']
})
export class BlogIdComponent implements OnInit, AfterViewInit {
  titleUrl: string;
  id: any;
  title: string;
  detail: string;
  createDate: Date;
  public loading = false;
  content: any;
  constructor(public nav: NavBarService, private blogService: BlogService, private router: Router, private route: ActivatedRoute) {
    this.loading = true;
  }

  ngOnInit() {
    this.nav.show();
    this.route.params.subscribe((params) => {
      if (params) {
        this.id = params['id'];
        this.titleUrl = params['title_url'];
      }
    })
  }

  ngAfterViewInit() {
    this.getBlogId();
  }

  getBlogId() {
    if (this.id) {
      this.blogService.getById(this.id).subscribe((data) => {
        if (data && data.length != 0) {
          if (this.titleUrl != data[0].title_url) {
            this.router.navigate(['404']);
          } else {
            this.title = data[0].title;
            this.detail = data[0].body;
            this.createDate = data[0].create_date;
          }
          this.loading = false;
        } else {
          this.router.navigate(['404']);
        }
      });
    }
  }
}
