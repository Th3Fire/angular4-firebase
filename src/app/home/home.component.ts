import { Component, OnInit } from '@angular/core';

import { NavBarService } from '../shared/navbar/navbar.service'
@Component({
  selector: 'hello-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
