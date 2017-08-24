import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hello-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  
  routeLinks:any[];
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.routeLinks = [
    {label: 'Home', link: ''},
    {label: 'User', link: 'user'}];

  }

  ngOnInit() {
  }

  

}
