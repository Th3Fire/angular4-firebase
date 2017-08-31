import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../../environments/environment';

import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase) ],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
