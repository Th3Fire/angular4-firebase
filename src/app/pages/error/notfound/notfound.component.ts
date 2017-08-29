import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { NavBarService } from '../../../shared/navbar/navbar.service';


@Component({
  selector: 'hello-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(public nav: NavBarService, public router: Router) { }

  ngOnInit() {
    this.nav.hide();
  }

  goHome() {
    this.router.navigate(['']);
  }

}
