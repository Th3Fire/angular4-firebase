import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { RegisterComponent } from './pages/register/register.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { ProfilePageComponent } from './pages/profile-page/profile-page.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'user',
    component: UserComponent,
    children: []
  },
  {
    path: 'pages',
    component: PageListComponent ,
    children: []
  },
  {
    path: 'register',
    component: RegisterComponent ,
    children: []
  },
  {
    path: 'login',
    component: LoginPageComponent ,
    children: []
  },
  {
    path: 'profile',
    component: ProfilePageComponent ,
    children: []
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
