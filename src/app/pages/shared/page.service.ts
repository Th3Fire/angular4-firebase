import { Injectable } from '@angular/core';

import { PAGES } from './mock-pages';

@Injectable()
export class PageService {

  getPages() {
    // ไม่มีการ hard code ใน service อีกต่อไป
    // แต่ตอนนี้เราจะเข้าถึง pages จาก mock-pages แทน
    return PAGES;
  }

}