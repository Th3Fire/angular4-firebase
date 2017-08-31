import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../providers/auth.service';
import { NavBarService } from '../../shared/navbar/navbar.service';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase)
       ],
      declarations: [ NavBarComponent ],
      providers: [ NavBarService, AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
