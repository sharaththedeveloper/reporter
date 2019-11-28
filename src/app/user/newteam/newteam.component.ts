import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newteam',
  templateUrl: './newteam.component.html',
  styleUrls: ['./newteam.component.scss']
})
export class NewteamComponent implements OnInit {
  team=[];
  i=0;
  constructor() { }

  ngOnInit() {
  }
  addtoteam(){
     this.i+=1;
     this.team.push(this.i);
     console.log(this.team);
   }
   removefromteam(item){
    var index = this.team.indexOf(item);
     this.team.splice(index,1);
   }

}
