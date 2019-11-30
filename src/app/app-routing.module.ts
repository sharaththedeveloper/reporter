import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : "" , component : WelcomeComponent},
  { path: 'signin', loadChildren: () => import('./signinmanager/siginin/siginin.module').then(m => m.SigininModule) },
  { path: 'signup', loadChildren: () => import('./signupmanager/signup/signup.module').then(m => m.SignupModule) },
  { path: 'register', loadChildren: () => import('./signupmanager/register/register.module').then(m => m.RegisterModule) },
  { path: 'user', component:UserComponent ,children:[
    { path: '', loadChildren: () => import('./user/home/home.module').then(m => m.HomeModule) },
    { path: 'newproject', loadChildren: () => import('./user/newproject/newproject.module').then(m => m.NewprojectModule) },
    { path: 'newteam', loadChildren: () => import('./user/newteam/newteam.module').then(m => m.NewteamModule) },
    { path: 'people', loadChildren: () => import('./user/people/people.module').then(m => m.PeopleModule) },
    { path: 'settings', loadChildren: () => import('./user/settings/settings.module').then(m => m.SettingsModule) },
    { path: 'dashboard', loadChildren: () => import('./user/dashboard/dashboard.module').then(m => m.DashboardModule) },
  ]},
  
  
  
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
