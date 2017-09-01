import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class BlogService {
  constructor(public af: AngularFireDatabase) { }

  getAll(limit = 30) {
    return this.af.list('blog', {
      query: {
        limitToLast: limit,
      }
    });
  }
  getById(id) {
    return this.af.list('/blog', {
      query: {
        orderByChild: 'id',
        equalTo: parseInt(id)
      }
    });
  }
}
