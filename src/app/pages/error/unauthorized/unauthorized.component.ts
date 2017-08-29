import { Component, OnInit } from '@angular/core';

import { NavBarService } from '../../../shared/navbar/navbar.service';
@Component({
  selector: 'hello-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
