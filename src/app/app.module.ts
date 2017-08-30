import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/navbar/navbar.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageService } from './pages/shared/page.service';

import { RegisterComponent } from './pages/register/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { LoadingModule } from 'ngx-loading';

import { AuthService } from './providers/auth.service';
import { NavBarService } from './shared/navbar/navbar.service';
import { BlogService } from './pages/blog/blog.service';

import { UnauthorizedComponent } from './pages/error/unauthorized/unauthorized.component';
import { NotfoundComponent } from './pages/error/notfound/notfound.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TruncatePipe } from './pages/blog/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NavBarComponent,
    PageListComponent,
    RegisterComponent,
    LoginPageComponent,
    ProfilePageComponent,
    UnauthorizedComponent,
    NotfoundComponent,
    BlogComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    LoadingModule
  ],
  providers: [PageService, AuthService, NavBarService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

