import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { NavBarComponent } from './shared/navbar/navbar.component'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NavBarService } from './shared/navbar/navbar.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
      ],
      declarations: [
        AppComponent,
        NavBarComponent
      ],
      providers: [
        AngularFireAuth,
        NavBarService
      ]
    }).compileComponents();
  }));

  it('should create the app', (() => {
    expect(AppComponent).toBeTruthy();
  }));


});
