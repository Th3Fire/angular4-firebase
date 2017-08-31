import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireAuthModule, 
      AngularFireDatabaseModule, 
      AngularFireModule.initializeApp(environment.firebase)],
      providers: [BlogService, AngularFireDatabase]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
