import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

import { FormsModule } from '@angular/forms';
import { PageListComponent } from './page-list.component';
import { PageService } from '../shared/page.service';
import { NavBarService } from '../../shared/navbar/navbar.service';
import { AuthService } from '../../providers/auth.service';

describe('PageListComponent', () => {
  let component: PageListComponent;
  let fixture: ComponentFixture<PageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        RouterTestingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase) ],
      declarations: [ PageListComponent ],
      providers: [ AngularFireAuth, PageService, NavBarService, AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
