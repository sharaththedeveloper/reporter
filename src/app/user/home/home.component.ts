import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects =[
    {name : "project1"},
    {name : "project2"},
    {name : "project3"},
  ]
  constructor(private router : Router) { }

  ngOnInit() {
  }
  dashnavigator(projectname){
  
    this.router.navigate(["/user/dashboard",projectname])
  }

}
