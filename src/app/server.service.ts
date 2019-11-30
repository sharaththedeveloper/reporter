import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }
  signin(){
    console.log('signin');
  }
  signup(){
    console.log('signup');
  }
  fetchUserResources(){
    console.log('fetch user resources');
  }
  addNewProject(){
    console.log('add new project');
  }
  addNewTeam(){
    console.log('add new team');
  }
  invitePeople(){
    console.log('invite people');
  }
  removePeople(){
    console.log('remove people');
  }
}
