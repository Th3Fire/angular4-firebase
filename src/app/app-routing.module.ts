import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { RegisterComponent } from './pages/register/register.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { ProfilePageComponent } from './pages/profile-page/profile-page.component'
import { UnauthorizedComponent } from './pages/error/unauthorized/unauthorized.component'
import { NotfoundComponent } from './pages/error/notfound/notfound.component'
import { BlogComponent } from './pages/blog/blog.component';
import { BlogIdComponent } from './pages/blog/blog-id/blog-id.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'blog',
    component: BlogComponent ,
  },
  {
    path: 'blog/:id/:title_url',
    component: BlogIdComponent ,
  },
  {
    path: 'pages',
    component: PageListComponent ,
  },
  {
    path: 'register',
    component: RegisterComponent ,
  },
  {
    path: 'login',
    component: LoginPageComponent ,
  },
  {
    path: 'profile',
    component: ProfilePageComponent ,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent ,
  },
  //404
  {
    path: '404',
    component: NotfoundComponent ,
  },
  {
    path: '**', redirectTo: '/404'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
