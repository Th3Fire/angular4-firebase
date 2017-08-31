import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import {  TruncatePipe } from './truncate.pipe';
import { NavBarService } from '../../shared/navbar/navbar.service';
import { BlogService } from './blog.service';
describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoadingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase)],
      declarations: [BlogComponent,TruncatePipe],
      providers: [NavBarService, BlogService, AngularFireAuth]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
