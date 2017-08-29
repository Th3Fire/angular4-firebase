import { Injectable } from '@angular/core';

@Injectable()
export class NavBarService {
  visible: boolean;
  constructor() { this.visible = false;}

  hide() { this.visible = false; }
  show() { this.visible = true; }

}
