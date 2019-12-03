import { DashboardComponent } from './user/dashboard/dashboard.component';
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
    { path: 'teams', loadChildren: () => import('./user/teams/teams.module').then(m => m.TeamsModule) },
    { path: 'connections', loadChildren: () => import('./user/connections/connections.module').then(m => m.ConnectionsModule) },
    { path: 'newproject', loadChildren: () => import('./user/newproject/newproject.module').then(m => m.NewprojectModule) },
    { path: 'newteam', loadChildren: () => import('./user/newteam/newteam.module').then(m => m.NewteamModule) },
    { path: 'people', loadChildren: () => import('./user/people/people.module').then(m => m.PeopleModule) },
    { path: 'settings', loadChildren: () => import('./user/settings/settings.module').then(m => m.SettingsModule) },
    { path: 'dashboard/:project', component: DashboardComponent,children:[
      { path: '', loadChildren: () => import('./user/dashboard/dashboardhome/dashboardhome.module').then(m => m.DashboardhomeModule) },
      { path: 'bugs', loadChildren: () => import('./user/dashboard/bugs/bugs.module').then(m => m.BugsModule) },
    ] },
  ]},
  { path: '**', loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule) },
  
 
  
  
  
  
  
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
